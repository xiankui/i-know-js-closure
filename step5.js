/**
 * 现代的模块机制 * 模块定义之依赖注入
 */
var MyModules = (function Manager () {
	// 所有定义的模块
	var modules = {};

	function define (name, deps, impl) {
		for (var i=0, len=deps.length; i<len; i++) {
			// 依赖模块名称，换成了依赖模块
			deps[i] = modules[deps[i]]
		}

		modules[name] = impl.apply(impl, deps)
	}

	function get (name) {
		return modules[name];
	}

	return {
		define,
		get
	}
})()



MyModules.define('moduleA', [], function () {
	return {
		log: function (msg) {
			console.log(msg)
		}
	}
})

MyModules.define('moduleB', ['moduleA'], function (moduleA) {
	return {
		log: function (msg) {
			msg = msg.toUpperCase();

			moduleA.log(msg)
		} 
	}
})

MyModules.get('moduleA').log('i am module a');

MyModules.get('moduleB').log('i am module b');

// i am module a
// I AM MODULE B