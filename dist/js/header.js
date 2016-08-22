var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MyHeader = (function (_super) {
    __extends(MyHeader, _super);
    function MyHeader(opts) {
        _super.call(this);
        this.text = opts.text;
        rabbit.publish(new Message('main', 'header loaded'));
    }
    MyHeader.prototype.unmounted = function () {
        alert('bye bye');
    };
    MyHeader = __decorate([
        template("\n<my-header>\n   <div>\n      timer: { text }<br>\n   </div>\n</my-header>"), 
        __metadata('design:paramtypes', [Object])
    ], MyHeader);
    return MyHeader;
}(Riot.Element));
//# sourceMappingURL=header.js.map