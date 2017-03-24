Template.createchat.events({
	'submit form' : function (e) {
		var name = e.target.name.value;
		Chatrooms.insert({
			name : name,
			createdBy: Meteor.user() 
		});
		console.log(Meteor.userId());
		Router.go('chatroom.create',{_name: Chatrooms.find({ "_id": this._id})}); 
	}
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