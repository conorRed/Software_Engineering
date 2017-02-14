import { Template } from 'meteor/templating';
import './main.html';

Template.posts.helpers({
  charsRemaining: function(){
    return Session.get('CharactersRemaining');
  }
});
Template.posts.events({
  'keyup #input-post' : function(event){
    var inputText = event.target.value;
    Session.set("CharactersRemaining",(140-inputText.length)+ "characters remaining");
  }
});
Template.posts.onRendered(function(){
  $("postForm").validate();
});
Template.body.events({
  
  "submit .input" : function(){
    var value1 = event.target.name.value;
    var value2 = event.target.age.value;
      example.insert({
            name : value1,
            age : value2
      });

    event.target.name.value = "";
    event.target.age.value = "";
    return false;
  }
});
