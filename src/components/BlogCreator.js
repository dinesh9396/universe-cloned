import React, { useState } from "react";
import "./BlogCreator.css";

// function CreateUserBlog({ onClose, onNewBlog }) {
//   // const [blogs, setBlogs] = useState([]);
//   const [title, setTitle] = useState("");
//   const [url, setUrl] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Add the new blog to the blogs array
//     // setBlogs([...blogs, { title, url }]);
//     onNewBlog({ title, url });
//     // Optionally clear the form
//     setTitle("");
//     setUrl("");
//   };
function CreateUserBlog({ onClose, onNewBlog }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    fetch("http://127.0.0.1:5001/api/companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ company: title }), // Send the title as a company
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        onNewBlog(data);
        setTitle("");
        onClose(); // Close the form after successful submission
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <h3 className="blogHeading">Create blog here</h3>
        <button className="cancel-button" onClick={onClose}>
          ❌
        </button>
      </div>
      <form className="createBlogForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="blogInput"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          className="blogInput"
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const BlogCreator = ({ onNewBlog }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const toggleCreateForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  return (
    <div>
      {showCreateForm ? (
        <CreateUserBlog onClose={toggleCreateForm} onNewBlog={onNewBlog} />
      ) : (
        <button className="create-blog-button" onClick={toggleCreateForm}>
          CREATE NEW BLOG SPACE
        </button>
      )}
    </div>
  );
};

export default BlogCreator;
