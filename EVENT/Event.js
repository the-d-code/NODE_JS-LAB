var event = require('events');
var EventEmitter = new event.EventEmitter();

EventEmitter.on("event1", eventHandler);

function eventHandler() {
    console.log("event1");
}

EventEmitter.emit("event1");