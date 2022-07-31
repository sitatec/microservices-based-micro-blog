const Express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = Express();
const commentsByPostId = {};

app.use(Express.json());
app.use(cors());

app.post("/posts/:id/comments", (request, response) => {
  const commentId = randomBytes(8).toString("hex");
  const postId = request.query.id;
  const comments = commentsByPostId[postId] || [];
  
  comments.push({ id: commentId, content: request.body.content });
  commentsByPostId[postId] = comments;

  response.status(201).send(commentId);
});

app.get("/posts/:id/comments", (request, response) => {
  const postId = request.query.id;
  response.send(commentsByPostId[postId] || []);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
