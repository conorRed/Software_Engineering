import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

Meteor.publish('messages',function () {
	return  Messages.find({}, { sort: { 'time': -1 } });
});
