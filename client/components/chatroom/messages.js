Meteor.subscribe('chatroom',Session.get("chatroom name"));

Template.messageBox.events({

  "submit form": createMessage

});
Template.messages.helpers({
	messages:message,
	time :  time,
	user : getUser,
  name : Session.get("chatroom name")
});
function message(){
	return Chatrooms.find();
}
function getUser(){
	return Meteor.user();  
}
function time(time) {
  return moment(time).format("HH:mm:ss");
}
function createMessage(evt) {
  Chatrooms.insert({
    messages: {
      id : this.userId,
      message: evt.target.message.value,
      time : new Date()
    }
  });
  evt.target.message.value = '';
  return false;
}

