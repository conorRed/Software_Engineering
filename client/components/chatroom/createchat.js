
Template.createchat.events({
	'submit #create-room' : function (e) {
    e.preventDefault();
		var name = e.target.name.value; 
    console.log("about to create chatroom...");
		Meteor.call('createChatRoom',name, function(err, chatRoomId) {
      console.log(chatRoomId);
      if (err) {
        alert(err.reason);
      } else {
        console.log(chatRoomId);
        Router.go('chatRoom',{ _id: chatRoomId });
      }
    });

	}
});


Template.createchat.helpers({
   //user : getUser
});

Template.createchat.onRendered(function () {
    $(".login_form").validate({
      rules: {
    username: "required",
    password:"required"
  },
  messages: {
  name: "Please enter Chatroom name"
  }
    });
  }

);
function getUser(){
  return Meteor.user().username;
}
