import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
    setSubmitting(false);
  };

  let Button;
  if (isSubmitting) {
    Button = (
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
  } else {
    Button = <button className="btn btn-primary">Submit</button>;
  }

  return (
    <div className="col-md-6 no-gutters">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            type={"text"}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            required
          />
        </div>
        {Button}
      </form>
    </div>
  );
};

export default PostForm;
