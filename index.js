const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);


let mySocket;

app.get('/taResponse', function (req, res) {

  const action = req.query.action;

  let payload;

  if (action === 'approve') {
    payload = true;
  } else {
    payload = false;
  }

  mySocket.emit('taResponse', {
    payload
  });

  res.send(null);
})

app.get('/doctorResponse', function (req, res) {

  const action = req.query.action;

  let payload;

  if (action === 'approve') {
    payload = true;
  } else {
    payload = false;
  }

  mySocket.emit('doctorResponse', {
    payload
  });

  res.send(null);
})

server.listen(process.env.PORT || 3000, () => {
  console.log('im running')
});
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  mySocket = socket;
});