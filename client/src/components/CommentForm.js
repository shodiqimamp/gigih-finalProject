import React, { useState } from "react";

function CommentForm({ handleSubmit }) {
  const [name, setUsername] = useState("");
  const [comment, setNewComment] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(name, comment);
    setUsername("");
    setNewComment("");
  };

  return (
    <form onSubmit={onSubmit} className="mt-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full text-sm p-2 mb-2 text-gray-900 bg-white border border-gray-200 rounded-lg focus:ring-0 focus:border-gray-500 focus:outline-none"
        placeholder="Name"
        required
      ></input>
      <div className=" px-4 py-2 mb-4 bg-white border border-gray-200 rounded-lg rounded-t-lg">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>

        <textarea
          value={comment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="2"
          className="w-full px-0 text-sm text-gray-900 border-0 resize-none focus:ring-0 focus:outline-none focus:border-gray-500"
          placeholder="Comment"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-3 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-green-300 hover:bg-green-500"
      >
        Add Comment
      </button>
    </form>
  );
}

export default CommentForm;
