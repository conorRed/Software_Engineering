import { Template } from 'meteor/templating';
import './main.html';


Template.posts.helpers({
  charsRemaining: function(){
    return Session.get("cr");
  }
});
Template.posts.events({
  'keyup #inputPost' : function(event){
    var inputText = event.target.value;
    Session.set("cr",(140-inputText.length) + " Characters remaining");
   // Meteor.subscribe('userPosts');
  },
  'submit #postForm' : function(){
    var post = event.target.inputPost.value;
    event.target.reset();
    Session.set("cr", 140 + " Characters remaining");
    Meteor.call('insertPost',post);

  }
});
Template.body.helpers({
  posts : function () {
    return Posts.find();
  }
});
Template.posts.onRendered(function(){
  $("postForm").validate();
});
