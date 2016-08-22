rabbit = new Rabbit();
rabbit.subscribe(new Subscriptor(function (msg) {
    console.log('MSG', msg);
}, 'header', 'main'));
window.onload = function () {
    riot.mount('*');
};
//# sourceMappingURL=main.js.map