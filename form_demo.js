// hello

/*
  file : form_demo.js
  author: gajendra
*/
var first_name = 'pinki';
var last_name = 'jena';

var changeHelloText = function(link){
  link.text = link.text == 'hello' ? 'go action' : 'hello';
}
// concatination
// alert('full name : ' + first_name + last_name)

// logical operators
var a = 5;
var b = '5';

// console.log(a == b);
// console.log(a === b);

// console.log(a != '5')
// console.log(a !== '5')



function changeDivText(id){
  document.getElementById(id).innerHTML = 'new text'
}

document.getElementById('link_bind').addEventListener('click', function() {
  this.text = this.text == 'hello2' ? 'go action 2' : 'hello2';
});