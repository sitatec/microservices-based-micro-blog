const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (request, response) => {
  const event = request.body;

  events.push(event);

  axios.post("http://posts-cluster-ip:4000/events", event).catch((err) => {
    console.log("Service = posts")
    console.log(err.message);
  });
  axios.post("http://comments-cluster-ip:4001/events", event).catch((err) => {
    console.log("Service = comments")
    console.log(err.message);
  });
  axios.post("http://query-cluster-ip:4002/events", event).catch((err) => {
    console.log("Service = query")
    console.log(err.message);
  });
  axios.post("http://moderation-cluster-ip:4003/events", event).catch((err) => {
    console.log("Service = moderation")
    console.log(err.message);
  });
  response.send({ status: "OK" });
});

app.get("/events", (_, response) => {
  response.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
