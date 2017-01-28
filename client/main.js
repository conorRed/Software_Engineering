import { Template } from 'meteor/templating';



Template.body.events({
  
  "submit .input" : function(){
    var value1 = event.target.name.value;
    var value2 = event.target.age.value;
      example.insert({
            name : value1,
            age : value2
      });

    event.target.name.value = "";
    event.target.age.value = "";
    return false;
  }
});
