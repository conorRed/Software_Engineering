
Meteor.methods({
	'insertMessage' : function(m){
		Messages.insert({
			message: m,
			timestamp : new Date()
		});
		
	},
	'trendingTopics' : function(trending){
		Template.createchat.helpers({
			trending : trending
		});
	}
})
