import { useCallback } from "react";
import SingleInputForm, {
  useSingleInputFormProps,
} from "../core/forms/SingleInputForm";
import CommentService from "../services/comment_service";

const commentService = new CommentService();

const CommentForm = () => {
  const createComment = useCallback((content) => {
    return commentService.createComment({ content });
  }, []);

  const [comment, onChange, isSubmitting, onSubmit] =
    useSingleInputFormProps(createComment);

  return (
    <SingleInputForm
      label="Comment"
      value={comment}
      onChange={onChange}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default CommentForm;
