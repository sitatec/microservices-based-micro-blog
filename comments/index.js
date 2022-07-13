const Express = require('express');
const { randomBytes } = require('crypto');

const app = Express();
const commentsByPostId = {}

app.use(Express.json());

app.post('posts/:id/comments', (request, response) => {
  const commentId = randomBytes(8).toString('hex');
  const postId = request.query.id;
  comments.push({id: commentId, content: request.body.content});

  const comments = commentsByPostId[postId] || [];
  commentsByPostId[postId] = comments

  response.status(201).send(commentId);
});

app.get('posts/:id/comments', (request, response) => {
  const postId = request.query.id;
  response.send(commentsByPostId[postId] || []);
});