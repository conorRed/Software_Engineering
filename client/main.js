import { Template } from 'meteor/templating';
import './main.html';

Template.dashboard.events({
    'click #logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
Template.userLayout.helpers({
    user : getUser
});
function getUser(){
    if(Meteor.user()){
    return Meteor.user().username; 
    } else{
        Router.redirect('/login');
    }
}
Template.home.helpers({
  trending : getTrending

});
Template.home.events({
    'click #login_facebook' : function () {
        Meteor.loginWithFacebook({
    requestPermissions: ['email']
  }, function (err) {
    if (err) {
      Session.set('errorMessage', err.reason || 'Unknown error');
    }else{
        Router.go('user-profile', Meteor.user.services.facebook.name);
    }
  });
                     },
    'click #login_twitter' : function () {
        Meteor.loginWithTwitter({
    requestPermissions: ['email']
  }, function (err) {
    if (err) {
      Session.set('errorMessage', err.reason || 'Unknown error');
    }else{
        Router.go('user-profile', Meteor.user().username);
    }
  });
    }
});
sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 3000,
        html: true,
        onRouteClose: true,
        stack: true,

    });
Meteor.subscribe('chatRooms',Meteor.userId());
function getUser() {
    if(Meteor.user){
        return Meteor.user().username;
    }else{
        console.log("shablagoo!");
    }
}
function getChatrooms() {
    if(Meteor.user){
        return ChatRooms.find();
    }else{
        return "No chatrooms found";
    }
}
Template.dashboard.helpers({
    user : getUser,
    chatroom : getChatrooms,
    time : time
})
function time(time) {
    var date = new Date();

    //var t = moment(date).minute() - moment(time).minute();
    var t = date.getTime() - time;
    var diffDays = Math.floor(t/(1000*3600*24));
    var diffHours = Math.floor(t/(1000*3600));
    var diffMins = Math.floor(t/(1000*60));
    var diffSecs = Math.floor(t/(1000));
    if(diffDays > 0)
    return ("about " + diffDays + "d ago");
    if(diffHours > 0)
    return ("about " + diffHours + "h ago");
    if(diffMins > 0)
    return (diffMins + "m ago");
    else
    return (diffSecs + "s ago");
}
function getTrending(){
    return Meteor.call('getTrending');
}