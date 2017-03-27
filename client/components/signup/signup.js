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
      console.log(error);
      return error;

    }
    else{
      Router.go('/dashboard');
    }
   
  });
    
  }
});