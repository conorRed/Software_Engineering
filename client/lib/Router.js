Router.configure({
	layoutTemplate: "main"
});

Router.route('/',function () {
	this.render('home',{to: "mainSection"});
	this.layout("main");
});

Router.route('/logout',function () {
	Meteor.logout();
	this.render('home',{to: "mainSection"});
	this.layout("main");
});
Router.route('/aboutus',function () {
	this.render('aboutus');
	this.layout("main");
});
Router.route('/dashboard',function () {
	this.render(Meteor.user() ? 'dashboard':'home' , {to: "mainSection"});
	this.layout("main");
});
Router.route('/signup',function () {
	this.render('sign_up_form', {to: "mainSection"});
	this.layout("main");
});

Router.route('/login',function () {
	this.render('login',{to: "mainSection"});
	this.layout("main");
});
Router.route('/chatroom',function () {
	this.render('chatroom',{to: "mainSection"});
	this.layout("main");
});

