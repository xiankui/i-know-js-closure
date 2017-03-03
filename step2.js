/**
 * 第二层定义：当函数在别处调用时，依然需要访问它的父作用域的变量
 */


/**
 * 常见的一种方式是，当函数的返回值（如函数或对象）仍然需要访问它内部的变量时，才是闭包的真正应用
 */
function foo () {
	var a = 1;

	function bar () {
		console.log(a)
	}

	return bar;
}

// 当函数foo()执行后，并没有销毁；因为它的变量a留在了bar()的闭包之中
var baz = foo();  

baz();


/**
 * 定时器也是一种常见的闭包应用
 */
function wait (message) {
	setTimeout(function timer () {
		console.log(message)
	}, 1000)
}

// wait执行1000ms后，并没有销毁；timer仍然访问到了message变量
wait('hello closure!');


/**
 * 只要使 用了回调函数,实际上就是在使用闭包!
 */
function ajax(url, callback) {
	// fetch url for data, and put it to callback
	let data = 'some data';

	callback(data)
}

ajax('', function (data) {
	console.log(data)
})