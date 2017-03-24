import { Template } from 'meteor/templating';
import './main.html';

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});

Template.body.helpers({
  posts : function () {
    return Posts.find();
  }
});

