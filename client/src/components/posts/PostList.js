import React, { useEffect, useState } from "react";
import PostService from "../../services/post_service";
import CommentForm from "../comments/CommentForm";
import CommentList from "../comments/CommentList";

const postService = new PostService();

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await postService.getPostsWithComments();
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
        <div className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentForm postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default PostList;
