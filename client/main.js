import { Template } from 'meteor/templating';
import './main.html';


Template.sign_up_form.events({
  'submit #postForm' : function(){
      event.preventDefault();
        var newUserData = {
          username: $('[id="username"]').val(),
          email: $('[id="email"]').val(),
          password: $('[id="password"]').val()
        };
        Meteor.call('insertUser', newUserData);
        Meteor.loginWithPassword(newUserData.email, newUserData.password);
        Router.go('/');
      },
});
Template.navbar_main.events({
  'click .logout' : function(){
      event.preventDefault();
      Meteor.logout();
      Router.go('/');
    },
  'submit #navbar_login' : function(){
      event.preventDefault();
        var email = $('[id=email]').val();
        var password = $('[id=password]').val();
        Meteor.loginWithPassword(email, password);
        Router.go('/aboutus');
    }
});


Template.body.helpers({
  posts : function () {
    return Posts.find();
  }
});

