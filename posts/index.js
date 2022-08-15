const Express = require('express');
const {randomBytes} = require('crypto');
const cors = require('cors');

const postsStore = {};
const app = Express();

app.use(Express.json());
app.use(cors());

app.get("/posts", (_, response) => {
  response.send(postsStore);
});

app.post("/posts", (_, response) => {
  const postId = randomBytes(8).toString("hex");

  postsStore[postId] = {
    id: postId,
    title: request.body.title,
  };

  response.status(201).send({ id: postId });
});

app.post("/events", (_, response) => {
  console.log("Received Event", req.body.type);

  response.send({});
});

app.listen(4000, () => {
  console.log('Test k8s deployment update from docker hub');
  console.log('Listening on port 4000');
})
