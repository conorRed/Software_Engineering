Router.configure({
	layoutTemplate: "main"
});

Router.route('/',function () {
	this.render('home');
	this.layout("main");
});
Router.route('/dashboard',function () {
	this.render('dashboard', {to: "mainSection"});
	this.layout("main");
});
