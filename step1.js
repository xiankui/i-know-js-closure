/**
 * 第一层定义：闭包是基于词法作用域书写代码时所产生的自然结果
 * 变量由内而外的查找方式，就是闭包
 */

function foo() {
	var a = 1;

	function bar() {
		console.log(a)
	}

	bar();
}

foo();