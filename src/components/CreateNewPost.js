// CreateNewPost.js

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./CreateNewPost.css";

const CreateNewPost = ({
  cancelCreatingPost,
  selectedCompany,
  addNewStory,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");

    fetch(`http://127.0.0.1:5001/api/posts/${selectedCompany.company}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content, imageUrl }), // This will be available in request.get_json() in your backend
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        addNewStory(data);
        // Handle the response, like redirecting to the posts list or clearing the form
        cancelCreatingPost(); // if you want to go back to the list after successfully creating a post
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="create-post-container">
      <h1 className="create-post-heading">Create New Post</h1>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <div className="form-split">
          <div className="post-details">
            <label className="post-title-label">Title:</label>
            <input
              className="post-title-input"
              type="text"
              value={`#${title}`}
              onChange={(e) => setTitle(e.target.value.slice(1))}
            />
            <label className="post-image-label">Image URL:</label>
            <input
              className="post-image-input"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <label className="post-content-label">Post Content:</label>
            <textarea
              className="post-content-textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="submit-button" type="submit">
              Submit
            </button>
            <button className="cancel-button" onClick={cancelCreatingPost}>
              Cancel
            </button>
          </div>
          <div className="markdown-preview">
            <ReactMarkdown>
              {`#${title}\n\n${content}\n\n![Image](${imageUrl})`}
            </ReactMarkdown>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPost;
