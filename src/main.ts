/// <reference path="../typings/riot-ts.d.ts" />
rabbit = new Rabbit();



rabbit.subscribe(new Subscriptor(function(msg: Message){
  console.log('MSG', msg);
}, 'header', 'main'));

window.onload = function() {
  riot.mount('*');
}
