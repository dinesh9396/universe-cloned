// PostsTable.js

import React from "react";
import "./PostsTable.css";

const PostsTable = ({ stories, selectStory, startCreatingPost }) => {
  return (
    <div>
      <button className="create-blog-button" onClick={startCreatingPost}>
        CREATE NEW POST
      </button>
      <h1 className="blog-heading">List Of Post</h1>
      <div className="table-container">
        <table className="story-table">
          <thead className="postsTable-thead">
            <tr className="postsTable-tr">
              <th className="postsTable-th">Title</th>
              <th className="postsTable-th">Summary</th>
              <th className="postsTable-th">View</th>
            </tr>
          </thead>
          <tbody className="postsTable-tbody">
            {stories.map((story) => (
              <tr className="postsTable-tr" key={story.id}>
                <td className="postsTable-td">{story.title}</td>
                <td className="postsTable-td">{story.summary}</td>
                <td className="postsTable-td">
                  <button
                    className="postsTable-view"
                    onClick={() => selectStory(story)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
