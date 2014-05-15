# Some JS basics

## variables, functions, objects, so wow

var i = <some boolean>;

var i = <some number>;

var i = 'this is a string';

var i = "this is also a string";

// this is an array. it's empty
var i = []

// this is an array with shit in it:
var i = [ 1234, "lol", 'cats', function() { console.log("what?"); }, false, true];

// referencing items in an array uses numbers:
i[0] === 1234 -> true!
i[1] === "lol" -> also true!
i[4] === false -> you guessed it

// the following two things are both functions. The only difference is that
// the first is an "aliased" function. We use a variable "i", but the actual
// JS-internal name can be anything.
var i = function() {
  console.log("this is a function")
};

// this is explictly always the function with name "i"
function i() {
	console.log("this is essentially the same function, without the 'var' bit");
}

// this is an object:
var i = {
	// it's an empty object... boring
};

// this is also an object, but now with key/value pairs. Keys can any
var i = {
	a: 1234,
	b: 'lol',
	c: "cat",
	d: function() {
      console.log("bam!");
	}

	"normally illegal key": "perfectly legal value"
};

// referencing items in objects, which are really just key/value pairs, uses key names:
i[0] === undefined, because we're using named keys, and we didn't declare a key named "0" (sneaky)
i["c"] === "cat"
i["normally illegal key"] === "perfectly legal value";
