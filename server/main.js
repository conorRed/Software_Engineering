import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {

});


Meteor.publish('chatroom',function (name) {
	return  Chatrooms.find( {}, { fields: { name: 1, name: 1 } } );
});


// this is equivalent to the standard node require:

