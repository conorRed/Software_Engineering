Meteor.subscribe('messages',this.userId);

Template.messageBox.events({

  "submit form": createMessage

});
Template.messages.helpers({
	messages:message,
	time :  time,
	user : getUser
});
function message(){
	return Messages.find();
}
function getUser(){
	return currentUser.username
}
function time(time) {
  return moment(time).format("HH:mm:ss");
}
function createMessage(evt) {
  Messages.insert({
    id : this.userId,
    message: evt.target.message.value,
    time : new Date()
  });
  evt.target.message.value = '';
  return false;
}

