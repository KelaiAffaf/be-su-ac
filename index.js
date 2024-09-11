// let http = require("http"); // es5
import http from "http"; // es6

// event
import events from "events";

const EventEmitter = events.EventEmitter;
let logger = new EventEmitter();
logger.on("error", function (message) {
  console.log("ERR: " + message);
});

logger.emit("error", "This is the first error");
logger.emit("error", "This is the second error");

http
  .createServer(function (request, response) {
    response.end("hello word");
    console.log("server running", 8080);
  })
  .listen(8080);
