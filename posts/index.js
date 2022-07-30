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

app.post("/posts", (request, response) => {
  const postId = randomBytes(8).toString("hex");

  postsStore[postId] = {
    id: postId,
    title: request.body.title,
  };

  response.status(201).send({ id: postId });
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
})
