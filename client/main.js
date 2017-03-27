import { Template } from 'meteor/templating';
import './main.html';

Template.dashboard.events({
    'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
Template.dashboard.helpers({
	user : getUser
})
Template.body.helpers({
  posts : function () {
    return Posts.find();
  }
});
function getUser() {
	if(Meteor.user){
		console.log(Meteor.user().username);
		return Meteor.user().username;
	}else{
		console.log("shablagoo!");
	}
}
sAlert.config({
	effect: 'scale',
	positon: 'bottom'
})
