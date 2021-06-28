const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

let events = require('./events.js');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send(events);
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.get('/events/:status', (req, res) => {
  const filteredEvents = events.filter(event => event[req.params.status]);
  res.send(filteredEvents);
});

app.get('/event/:id', (req, res) => {
  const filteredEvent = events.find(event => event.id === req.params.id);
  res.send(filteredEvent);
})

app.get('/tickets', (req, res) => {
  const filteredEvents = events.filter(event => event.purchased);
  res.send(filteredEvents);
})

app.post('/tickets/buy/:id', (req, res) => {
  let event = events.find(event => event.id === req.params.id);
  event.purchased = true;

  res.send(event);
})

app.post('/event/like', (req, res) => {
  let event = events.find(event => event.id === req.body.id);
  event.liked = true;

  res.send(event);
})

app.delete('/event/unlike', (req, res) => {
  let event = events.find(event => event.id === req.body.id);
  event.liked = false;

  res.send(event);
})

const port = process.env.PORT || 3001;

const server = app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});

module.exports = server;
