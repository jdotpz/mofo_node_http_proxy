var ourlib = require("./lib/redirector");

// let's test request

var http = require("http");
var port = 1337;

var ourserver = http.createServer(function (req, resp) {
  if (req.url === '/test') {

    console.log(req);

  }
});

// this is a function we're going to use to determine whether our listen() call succeeds or not
function listenCallback(error, no_error_data) {
  if (error) {
  	// ....
  	return console.error("this shit be bunk yo: ", error);
  }

  console.log("We are listening for your requests on port " + port);
}

// and this is our signal to start the http server listening process. Note that listenCallback
// at the end, which will get called by Node.js automatically. It'll always be called with 2
// arguments. The first arg is always either an error, or something that is treated as "false"
// in a conditional statement. The second argument is always either nothing (in case there's
// an error, say), or some data relevant to the function call succeeding (result value,
// running process, thread id, etc).
ourserver.listen(port, "127.0.0.1", listenCallback);
