/**
 * 闭包与块作用域的结合
 * 这个行为指出变量在循环过程中不止被声明一次,每次迭代都会声明。
 */

for (let i=1; i<=5; i++) { // 每次迭代都是一个新的作用域
	// let i = 1;
	setTimeout( function timer() {
	  console.log( i );
	}, i*100 );
}

// 1
// 2
// 3
// 4
// 5