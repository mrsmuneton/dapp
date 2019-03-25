import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  EthBlocks.init();
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  currentBlock() {
    console.log(EthBlocks.latest);
      return EthBlocks.latest.hash;
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
