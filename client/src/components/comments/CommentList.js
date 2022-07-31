import { useEffect, useState } from "react";
import CommentService from "../../services/comment_service";

const commentService = new CommentService();

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await commentService.getComments(postId);
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  return (
    <>
      {comments.length + " Comments"}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </>
  );
};

export default CommentList;
