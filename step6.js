/**
 * 未来的模块机制 * ES6之模块导入
 * 没有polyfill，需要babel转码才可以运行！
 */

import log from 'moduleA.js';

function LOG (msg) {
	msg = msg.toUpperCase();

	log(msg)
}

log('es6 moduleA.log method')