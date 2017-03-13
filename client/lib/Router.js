Router.configure({
	layoutTemplate: "home"
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
	this.render('dashboard', {to: "mainSection"});
	this.layout("main");
});
Router.route('/signup',function () {
	this.render('sign_up_form', {to: "mainSection"});
	this.layout("main");
});
Router.route('/login',function () {
	this.render('login', {to: "mainSection"});
	this.layout("main");
});
