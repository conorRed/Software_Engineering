
Template.createchat.events({
	'submit form' : function (e) {
		var name = e.target.name.value;
		Chatrooms.insert({
			name : name,
			createdBy: Meteor.user() 
		});
		
		Router.go('chatroom.create',_name: name); 
    Session.set("chatroom name", name);
    console.log(Session.get("chatroom name"));
	}
});


Template.createchat.helpers({
   user : getUser
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
  return this.userId;
}
