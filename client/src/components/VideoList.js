import React, { useState, useEffect } from "react";
import "./assets/VideoList.css";
import "font-awesome/css/font-awesome.min.css";

function VideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch("https://gigih-play-app.onrender.com/api/videos")
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
            <a href={`/videos/${video._id}`}>
              <img
                src={video.thumbnailUrl}
                alt={`Thumbnail for ${video.title}`}
              />
              <h4>{video.title}</h4>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
