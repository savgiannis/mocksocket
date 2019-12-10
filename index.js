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

    mySocket.emit('taResponse', {
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

    mySocket.emit('doctorResponse', {
      payload
    });
  }

  res.send(null);
})

app.get('/insuranceEmailError', function (req, res) {

  if (mySocket) {
    mySocket.emit('insuranceEmailError');
  }

  res.send(null);
})

app.get('/insuranceAboutToExpire', function (req, res) {

  if (mySocket) {
    mySocket.emit('insuranceAboutToExpire');
  }

  res.send(null);
})

app.get('/insuraceExpired', function (req, res) {

  if (mySocket) {
    mySocket.emit('insuraceExpired');
  }

  res.send(null);
})

app.get('/cardExpired', function (req, res) {

  if (mySocket) {
    mySocket.emit('cardExpired');
  }

  res.send(null);
})

app.get('/paymentFailed', function (req, res) {

  if (mySocket) {
    mySocket.emit('paymentFailed');
  }

  res.send(null);
})

app.get('/cantFindDoctors', function (req, res) {

  if (mySocket) {
    mySocket.emit('cantFindDoctors');
  }

  res.send(null);
})

/*====== TA ======*/


app.get('/firstStep', (req, res) => {
  if (mySocket) {
    mySocket.emit('firstStep');
  }
  res.send(null);
})

app.get('/secondStep', (req, res) => {
  if (mySocket) {
    mySocket.emit('secondStep');
  }
  res.send(null);
})

app.get('/thirdStep', (req, res) => {
  if (mySocket) {
    mySocket.emit('thirdStep');

  }
  res.send(null);
})

app.get('/fourthStep', (req, res) => {
  if (mySocket) {
    mySocket.emit('fourthStep');
  }
  res.send(null);
})

app.get('/fifthStep', (req, res) => {
  if (mySocket) {
    mySocket.emit('fifthStep');
  }
  res.send(null);
})

server.listen(process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  mySocket = socket;
});
