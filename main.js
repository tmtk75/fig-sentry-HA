var raven = require("raven");
sentry_host = process.argv[2];
console.log("sentry_host", sentry_host);

c = "http://2c1c859287dc41038bbf340b466f14b3:6e9b7c145d9c4e1aa3ab49b7611e7156@" + sentry_host + "/2"
var client = new raven.Client(c);
client.patchGlobal();

// record a simple message
client.captureMessage('hello world!');

// capture an exception
client.captureError(new Error('Uh oh!!'));

function a0() {b1();}
function b1() {c2();}
function c2() {d3();}
function d3() {
  throw new Error("Hi");
}

a0();
