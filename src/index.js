'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.16f26616-e0ed-4e88-9f1a-76b33e291567';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'GetNextBusScheduleIntent': function() {
        this.emit(':tell', 'Hello World!');
    }
};
