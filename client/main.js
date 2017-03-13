import { Template } from 'meteor/templating';
import './main.html';


Template.sign_up_form.events({
  'submit form' : function(){
     event.preventDefault();
  var email = event.target.email.value;
  var password = event.target.password.value;
    Accounts.createUser( { email: email, password: password }, ( error ) => {
      if ( error ) {
        console.log( error.reason );
      } 
        });
      Router.go('/');
  }
});
Template.navbar_main.events({
  'click .logout' : function(){
      event.preventDefault();
      Meteor.logout();
      Router.go('/');
    },
  'click #navbar_login_button' : function(){
    console.log('log in');
      event.preventDefault();
        var email = $('[id=email]').val();  
        var password = $('[id=password]').val();
        Meteor.loginWithPassword(email, password);
        Router.go('/dashboard');
    } 
});


Template.body.helpers({
  posts : function () {
    return Posts.find();
  }
});

