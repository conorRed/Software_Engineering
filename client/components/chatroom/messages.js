Meteor.subscribe('chatRooms');
Template.userchatrooms.helpers({
  userchatrooms : getchats
})
Template.messageBox.events({
  "submit form" : function (e) {
    e.preventDefault();
   var data = {
      message: e.target.message.value,
      chatRoomId: Router.current().params._id
    };
    Meteor.call('addMessage', data, function(err, result) {
      if (err) {
        alert(err.reason);
        e.target.message.value = message;
      } else {
        e.target.message.value = " ";
        console.log('result: ', result);
      }
    });
  }
});

Template.chatroom.helpers({
  user : getUser,
  
});
Template.messages.helpers({
	messages:message,
	time :  time,
	user : getUser,
  chatroomname : getchatname ,
  chatroomcreator : getchatcreator
});
function message(){
	 return Messages.find({}, { sort: { timestamp: -1 }});
}
function getUser(){
	return Meteor.user().username;  
}
function time(time) {
  return moment(time).format("HH:mm:ss");
}

function getchats(){
  return ChatRooms.find({userId : Meteor.userId()});  
}

function getchatname(){
  return ChatRooms.find({_id : Router.current().params._id},{ fields: { name: 1}}).fetch();  
}
function getchatcreator(chatname){
  var user = ChatRooms.find({name : chatname}).userId;
  return Meter.users().find({userId : user}).username;  
}

