import React from "react";

const Comment = ({ comment }) => {
  function formatDate(timestamp) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(
      new Date(timestamp)
    );
  }
  return (
    <div className="flex items-center px-4 py-2 space-x-3 leading-relaxed border-t sm:px-6 sm:py-4">
      <div className="text-white">
        <strong className="mr-2 text-sm">{comment.name}</strong>
        <span className="text-xs text-end">
          {formatDate(comment.createdAt)}
        </span>
        <p className="text-sm">{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
