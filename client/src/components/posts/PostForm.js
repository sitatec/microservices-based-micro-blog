import { useCallback } from "react";
import SingleInputForm, {
  useSingleInputFormProps,
} from "../core/forms/SingleInputForm";
import PostService from "../services/post_service";

const postService = new PostService();

const PostForm = () => {
  const createPost = useCallback((title) => {
    return postService.createPost({ title });
  }, []);

  const [title, onChange, isSubmitting, onSubmit] =
    useSingleInputFormProps(createPost);

  return (
    <SingleInputForm
      label="Title"
      value={title}
      onChange={onChange}
      onSubmit={onSubmit}
      isSubmitting={isSubmitting}
    />
  );
};

export default PostForm;
