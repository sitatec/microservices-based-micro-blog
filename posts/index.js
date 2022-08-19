const Express = require('express');
const {randomBytes} = require('crypto');
const axios = require("axios");
const cors = require('cors');

const postsStore = {};
const app = Express();

app.use(Express.json());
app.use(cors());

app.get("/posts", (_, response) => {
  response.send(postsStore);
});

app.post("/posts", async (request, response) => {
  const postId = randomBytes(8).toString("hex");

  postsStore[postId] = {
    id: postId,
    title: request.body.title,
  };

  await axios.post("http://event-bus-cluster-ip:4005/events", {
    type: "PostCreated",
    data: postsStore[postId],
  });
  
  response.status(201).send({ id: postId });
});

app.post("/events", (request, response) => {
  console.log("Received Event", request.body.type);

  response.send({});
});

app.listen(4000, () => {
  console.log('Test k8s deployment update from docker hub');
  console.log('Listening on port 4000');
})
