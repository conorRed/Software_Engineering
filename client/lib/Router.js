
var mustBeSignedIn = function(pause) {
  if (!(Meteor.user() || Meteor.loggingIn())) {
    Router.go('login');
  } else {
    this.next();
  }
};

var goToDashboard = function(pause) {
  if (Meteor.userId()) {
    Router.go('user-profile',Meteor.user().username);
  } else {
    this.next();
  }
};



Router.onBeforeAction(mustBeSignedIn, {except: ['/signup','/','login']});
Router.onBeforeAction(goToDashboard, {only: ['/']});
Router.route('/',function () {
	this.render('home',{to: "mainSection"});
	this.layout("main");
});

Router.route('/aboutus',function () {
	this.render('aboutus');
	this.layout("main");
});

Router.route('/dashboard/:_user',{
	name : 'user-profile',

	onBeforeAction: function() {
    if (Meteor.userId()) {
      this.layout("userLayout");
      this.render('dashboard',{to: "main"});
      
    } else {
      this.next();
    }
  }
});

Router.route('/dashboard',{
onBeforeAction: function() {	
    if (!! Meteor.userId()) {
      this.redirect('user-profile',Meteor.user().username);
    } else {
      this.redirect('login');
    }
  }
});

Router.route('/userchatroom/:_user',{
  name : 'userchatrooms',
  onBeforeAction: function () {
     if (Meteor.user()) {
      this.layout("userLayout");
      this.render('userchatrooms',{to: "main"});
      
    } else {
      this.next();
    }
  }
});

Router.route('/signup',function () {
	this.render('sign_up_form', {to: "mainSection"});
	this.layout("main");
});

Router.route('/login',function () {
	this.render('login', {to: "mainSection"});
	this.layout("main");
});

Router.route('/chatroom',function () {
  this.layout("userLayout");
	this.render('chatroom',{to: "main"});
	
});


Router.route('/create-chat-room', {
  name: 'createChatRoom',
  onBeforeAction: function() {
    if (!!Meteor.userId()) {
          this.layout("userLayout");
      this.render('createchat',{to: "main"});
  
    } else {
      this.next();
    }
  }
});
Router.route('/logout',
	{
		name : 'logout',
		onBeforeAction : function function_name(argument) {
			return Meteor.logout();
		},
		action : function () {
			this.go('home');
		}
	});
Router.route('/chat-rooms', {
  name: 'chatRooms',
  waitOn: function() {
    return Meteor.subscribe('chatRooms');
  },
  data: function() {
    return {
      chatRooms: ChatRooms.find()
    };
  }
});
Router.route('/chatroom/:_id',{
	name : 'chatRoom',
	waitOn: function() {
    return [
      Meteor.subscribe('chatRoom', this.params._id),
      Meteor.subscribe('chatRoomMessages', this.params._id)
    ];
  },
  data: function() {
    return {
      chatRoom: ChatRooms.findOne(this.params._id)
    };
  },
  action : function () {
    this.layout("userLayout");
  	this.render('chatroom',{to: "main"});
  }
});

Router.configure({
	layoutTemplate: "main"
});
