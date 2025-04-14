// Q8: How to make Post request in Node.js? ☆☆
// Answer: Following code snippet can be used to make a Post Request in Node.js.

var request = require("request");
request.post(
  "http://www.example.com/action",
  {
    form: {
      key: "value",
    },
  },
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  }
);
