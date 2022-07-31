import React, { useEffect, useState } from "react";
import PostService from "../../services/post_service";

const postService = new PostService();

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await postService.getPosts();
    setPosts(response.data);
  };

  useEffect(() => fetchPosts(), []);

  return (
    <div className="row">
      {Object.values(posts).map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 ">
        <div className="card-body">{post.title}</div>
      </div>
    </div>
  );
};

export default PostList;
