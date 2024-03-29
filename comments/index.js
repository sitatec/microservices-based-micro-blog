const Express = require("express");
const { randomBytes } = require("crypto");
const axios = require("axios");
const cors = require("cors");

const app = Express();
const commentsByPostId = {};

app.use(Express.json());
app.use(cors());

app.post("/posts/:id/comments", async (request, response) => {
  const commentId = randomBytes(8).toString("hex");
  const postId = request.params.id;
  const comments = commentsByPostId[postId] || [];
  
  comments.push({ id: commentId, content: request.body.content });
  commentsByPostId[postId] = comments;
  
  await axios.post("http://event-bus-cluster-ip:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content: request.body.content,
      postId: postId,
      status: "pending",
    },
  });

  response.status(201).send(commentId);
});

app.get("/posts/:id/comments", (request, response) => {
  const postId = request.query.id;
  response.send(commentsByPostId[postId] || []);
});

app.post("/events", async (request, response) => {
  console.log("Event Received:", request.body.type);

  const { type, data } = request.body;

  if (type === "CommentModerated") {
    const { postId, id, status, content } = data;
    const comments = commentsByPostId[postId];

    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;

    await axios.post("http://event-bus-cluster-ip:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content,
      },
    });
  }

  response.send({});
});

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
