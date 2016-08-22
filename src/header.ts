@template(`
<my-header>
   <div>
      timer: { text }<br>
   </div>
</my-header>`)

class MyHeader extends Riot.Element {
    text: string;

    constructor(opts) {
        super();
        this.text = opts.text;
        rabbit.publish(new Message('main', 'header loaded'));
    }

    unmounted() {
      alert('bye bye');
    }
}
