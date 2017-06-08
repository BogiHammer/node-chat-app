// Connecting
var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server!');
});

socket.on('newMessage', function (message) {
  console.log('New user', message);
});

// socket.on('welcomeMessage', function (message) {
//   console.log('welcome message: ', message);
// });