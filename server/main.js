import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  console.log(process.env);
});
Meteor.methods({
	'insertPost' : function (post) {
		Posts.insert(
		{
			post: post,
			date: new Date(),
			createdBy: this.userId,
			likes: {
				totalLikes:0,
				users:[]
			},
			retweets: {
				totalRetweets: 0,
				users: []
			}
		},
		function (error, result) {
			if(error) console.log (error);
			if(result) console.log(result);
		}

		)
	},
	'printName' : function(){
		return this.userId;
	},

 
});


Meteor.publish('userPosts',function (argument) {
	return Posts.find();
})