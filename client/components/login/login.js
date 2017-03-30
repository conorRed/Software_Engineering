
Template.login.events({
	'submit form': function(event){
        event.preventDefault();
        var username = event.target.username.value;
        var password = event.target.password.value;

       Meteor.loginWithPassword(username, password,function (error) {
         if(error){
              sAlert.error(error.reason);
         }
         else{
               Router.go('user-profile',{_user : event.target.username.value});
         }
       });  

    }
});
Template.login.onRendered(function () {
    $(".login_form").validate({
      rules: {
    username: "required",
    password:"required"
  },
  messages: {
    password: "Please enter password",
    username: "Please enter username"
    
  }
    });
  }

);
