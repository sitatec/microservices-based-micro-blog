import React from "react";
import PostForm from "./PostForm";
import PostList from "./posts/PostList";

const App = () => {
  return (
    <div className="container">
      <h2>Create Post</h2>
      <PostForm />
      <hr />
      <h2>Posts</h2>
      <PostList />
    </div>
  );
};

export default App;
