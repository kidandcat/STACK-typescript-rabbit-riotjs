var Rabbit = (function () {
    function Rabbit() {
        this.channels = {};
    }
    Rabbit.prototype.subscribe = function (sub) {
        if (!this.existsChannel(sub.channel))
            this.createChannel(sub.channel);
        this.channels[sub.channel].subscriptors[sub.name] = sub.cb;
    };
    Rabbit.prototype.unsubscribe = function (sub) {
        if (this.existsChannel(sub.channel)) {
            this.channels[sub.channel].subscriptors[sub.name] = null;
        }
    };
    Rabbit.prototype.publish = function (msg) {
        if (!this.existsChannel(msg.channel))
            this.createChannel(msg.channel);
        for (var c in this.channels[msg.channel].subscriptors) {
            this.channels[msg.channel].subscriptors[c](msg);
        }
    };
    Rabbit.prototype.createChannel = function (name) {
        this.channels[name] = {};
        this.channels[name]['subscriptors'] = {};
    };
    Rabbit.prototype.existsChannel = function (name) {
        if (this.channels[name])
            return true;
        else
            return false;
    };
    return Rabbit;
}());
var Subscriptor = (function () {
    function Subscriptor(cb, name, channel) {
        this.cb = cb;
        this.name = name;
        this.channel = channel;
    }
    return Subscriptor;
}());
var Message = (function () {
    function Message(channel, content) {
        this.channel = channel;
        this.content = content;
    }
    return Message;
}());
//# sourceMappingURL=rabbit.js.map