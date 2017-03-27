Router.configure({
	layoutTemplate: "main"
});

Router.route('/',function () {
	this.render('home',{to: "mainSection"});
	this.layout("main");
});

Router.route('/aboutus',function () {
	this.render('aboutus');
	this.layout("main");
});
Router.route('/dashboard',function () {
	if(Meteor.user()){
		this.render("dashboard", {to : "mainSection"});
	}else{
		Router.go("login");
	}
	 
});
/*
Router.route('/dashboard',function () {
	console.log(Meteor.users.find().fetch());
	this.render(Meteor.user() ? "dashboard" : "login", {to : "mainSection"});  
	this.layout("main");
	this.next();
});*/
Router.route('/signup',function () {
	this.render('sign_up_form', {to: "mainSection"});
	this.layout("main");
});

Router.route('/login',function () {
		console.log('loading login');
		this.render('login', {to: "mainSection"});

});

Router.route('/chatroom',function () {
	
	this.render('chatroom',{to: "mainSection"});
	this.layout("main");
});

Router.route('/create',function () {
	this.render('createchat',{to: "mainSection"});
	this.layout("main");

},{
	name: 'create.chatroom'
});

Router.route('/chatroom/:_name',function () {
	this.render('chatroom',{to: "mainSection"});
	this.layout("main");
	this.next();	
},
	{
		name : 'chatroom.create'	
});

