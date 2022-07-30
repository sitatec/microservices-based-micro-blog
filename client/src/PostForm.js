import React, { useState } from "react";
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:4000/posts', {title});
    setTitle('');
  };

  return (
    <div className="col-md-6">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type={"text"}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
