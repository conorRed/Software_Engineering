import { Template } from 'meteor/templating';
import './sign_up_form.html';


Template.sign_up_form.events({
  'submit form' : function(){
     event.preventDefault();
  var username = event.target.username.value;
  var email = event.target.email.value;
  var password = event.target.password.value;
  Accounts.createUser({
    username: username,
    email:email,
    password: password
  });
  Router.go('/dashboard');  
  }
});