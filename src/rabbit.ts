class Rabbit {
    channels: Object;

    constructor() {
        this.channels = {};
    }

    subscribe(sub: Subscriptor) {
        if (!this.existsChannel(sub.channel))
            this.createChannel(sub.channel)
        this.channels[sub.channel].subscriptors[sub.name] = sub.cb;
    }

    unsubscribe(sub: Subscriptor) {
        if (this.existsChannel(sub.channel)) {
            this.channels[sub.channel].subscriptors[sub.name] = null;
        }
    }

    publish(msg: Message) {
        if (!this.existsChannel(msg.channel))
            this.createChannel(msg.channel)
        for (let c in this.channels[msg.channel].subscriptors) {
            this.channels[msg.channel].subscriptors[c](msg);
        }
    }

    private createChannel(name: string) {
        this.channels[name] = {};
        this.channels[name]['subscriptors'] = {};
    }

    private existsChannel(name: string) {
        if (this.channels[name])
            return true;
        else
            return false;
    }
}

class Subscriptor {
    constructor(public cb: Function, public name: string, public channel: string) { }
}

class Message {
    constructor(public channel: string, public content: string) { }
}
