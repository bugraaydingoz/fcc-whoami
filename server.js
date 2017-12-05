var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  let ip = request.headers["x-forwarded-for"].split(",")[0]
  let lang = request.headers["accept-language"].split(",")[0]
  let os = request.headers["user-agent"].split(" ")
  os = os[1] + " " + os[2] + " " + os[3] + " " + os[4] + " " + os[5] + " " + os[6]
  
  let system = {ipaddress: ip, language: lang, software: os}
  response.send(JSON.stringify(system))
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port 3000');
});
