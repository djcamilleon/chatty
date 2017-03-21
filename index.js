var express = require('express');
var bodyParser = require('body-parser');

var messages = [
  { "message": "Hello!" },
  { "message": "Hola!" },
  { "message": "Bonjour!" }
]

var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json())

app.get('/messages', function(req, res, next){
  res.status(200).json({ messages: messages })
});

// app.post('/messages', function(req, res, next){
//   messages.push(req.body.message)
//   res.status(200).json({ messages: messages });
// });

app.post('/messages', function (req, res, next) {
  // console.log(req.body);
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
  });


app.listen(3000, function(){
  console.log('My Chatty app is listening!');
})