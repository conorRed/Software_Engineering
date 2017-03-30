import { Template } from 'meteor/templating';


Template.sign_up_form.events({
  'submit form' : function(){
     event.preventDefault();
  var username = event.target.username.value;
  var email = event.target.email.value;
  var password = event.target.password.value;

  Meteor.call('addUser',{
    username: username,
    email:email,
    password: password
  },function (error) {
    if(error){
      sAlert.error(error.reason);

    }
    else{
      Router.go('user-profile',_user = username);
    }
   
  });
    
  }
});


Template.sign_up_form.onRendered(function () {
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