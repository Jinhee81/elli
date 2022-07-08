'use strict';

//Javascript is synchronous.
//Execute the code block in order after hoisting.
//hoisting : var, function declaration

console.log(1);
// setTimeout(function() {
//     console.log(2);
// }, 2000);//2000밀리세컨드, 2초후에 2 출력함
setTimeout(() => console.log(2), 2000);//간단하건 애로우펑션으로 괄호 생략함

//2000밀리세컨드, 2초후에 2 출력함
//settimeout은 브라우저 api
console.log(3);


//이게 바로 비동기적 실행방법, 2초후에 실행하는것!!!


//콜백도 두가지로 나뉜다.
//Synchronous callback, 즉각적으로 실행하는 콜백

//Asynchronous callback, 언제 실행할지 모르는 콜백

