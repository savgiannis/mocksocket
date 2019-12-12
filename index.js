const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(server);


let mySocket;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


/*====== DOCTOR/PATIENT ======*/


app.get('/taResponse', function (req, res) {

  if (mySocket) {

    const action = req.query.action;

    let payload;

    if (action === 'approve') {
      payload = true;
    } else {
      payload = false;
    }

    mySocket.broadcast.emit('taResponse', {
      payload
    });
  }

  res.send(null);
})

app.get('/doctorResponse', function (req, res) {

  if (mySocket) {

    const action = req.query.action;

    let payload;

    if (action === 'approve') {
      payload = true;
    } else {
      payload = false;
    }

    mySocket.broadcast.emit('doctorResponse', {
      payload
    });
  }

  res.send(null);
})

app.get('/insuranceEmailError', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('insuranceEmailError');
  }

  res.send(null);
})

app.get('/insuranceAboutToExpire', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('insuranceAboutToExpire');
  }

  res.send(null);
})

app.get('/insuraceExpired', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('insuraceExpired');
  }

  res.send(null);
})

app.get('/cardExpired', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('cardExpired');
  }

  res.send(null);
})

app.get('/paymentFailed', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('paymentFailed');
  }

  res.send(null);
})

app.get('/cantFindDoctors', function (req, res) {

  if (mySocket) {
    mySocket.broadcast.emit('cantFindDoctors');
  }

  res.send(null);
})

/*====== TA ======*/


app.get('/firstStep', (req, res) => {
  if (mySocket) {
    mySocket.broadcast.emit('firstStep');
  }
  res.send(null);
})

app.get('/secondStep', (req, res) => {
  if (mySocket) {
    mySocket.broadcast.emit('secondStep');
  }
  res.send(null);
})

app.get('/thirdStep', (req, res) => {
  if (mySocket) {
    mySocket.broadcast.emit('thirdStep');

  }
  res.send(null);
})

app.get('/fourthStep', (req, res) => {
  if (mySocket) {
    mySocket.broadcast.emit('fourthStep');
  }
  res.send(null);
})

app.get('/fifthStep', (req, res) => {
  if (mySocket) {
    mySocket.broadcast.emit('fifthStep');
  }
  res.send(null);
})

server.listen(process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  mySocket = socket;
});
