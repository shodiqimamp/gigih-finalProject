import React, { useState, useEffect } from "react";
import "./assets/VideoList.css";
import "font-awesome/css/font-awesome.min.css";

function VideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3080/api/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideoList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="video">
      <div className="video-list">
        {videoList.map((video) => (
          <div key={video._id} className="video-item">
            <img
              src={video.thumbnailUrl}
              alt={`Thumbnail for ${video.title}`}
            />

            <h4>{video.title}</h4>
            <div className="play">
              <a href={`/videos/${video._id}`}>
                <span className="fa fa-play"></span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
