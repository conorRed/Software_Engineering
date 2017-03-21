 Meteor.subscribe('messages');
Template.messages.events({

  "submit form": createMessage

});
Template.messages.helpers({
	messages:message,
	time :  time
});
function message(){
	return Messages.find();
}
function time(time) {
  return moment(time).format("HH:mm:ss");
}
function createMessage(evt) {
  Messages.insert({
    message: evt.target.message.value,
    time : new Date()
  });
  evt.target.message.value = '';
  return false;
}

