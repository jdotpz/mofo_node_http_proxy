var ourlib = require("./lib/redirector");

// let's test request

var http = require("http");
var request = require("request");

var port = 1337;

var ourserver = http.createServer(function (req, resp) {
    var extracted = req.headers.host;

    if (extracted === "127.0.0.1:1337") {
      // we proxy all of reddit
      var redditURL = "http://reddit.com" + req.url;
      request.get(redditURL, function(error, result) {

        if (error) {
          resp.write("there was an error requesting reddit (oh shit!)");
          resp.write( JSON.stringify(error) );
          return console.error(error);
        }

        resp.write( result.body );
        resp.end();
      });

    else {
      resp.write("there was a header.host mismatch!");
      resp.end();
    }
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
