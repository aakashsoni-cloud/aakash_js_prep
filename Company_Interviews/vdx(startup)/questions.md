## Questions 1
### Give the output

var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on("letme_screm", myEventHandler);

//Fire the 'event_name' event:
eventEmitter.listen("letme_screm");


## Questions 2
### Write test for this ?
divide (10, 1) = 10

it("divide function test") {
  
}


## Questions 3
### Write query for this ?
TABLE ==> people
COLUMNS ==> aadhar, name
SQL ==> get duplicates aadhar


people.find().group("aadhar").


## Questions 4
### Write output for this ?
import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <h2>I am a _________ Car!</h2>;
}

const root = ___________(document.getElementById('root'));
root.render(<Car color="red"/>);


import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
const {color} = props
  return <h2>`I am a ${color} Car!`</h2>;
}

const root = ReactDOM(document.getElementById('root'));
root.render(<Car color="red"/>);