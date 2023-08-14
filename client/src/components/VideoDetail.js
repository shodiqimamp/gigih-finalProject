import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import "./assets/VideoDetail.css";
import Topbar from "./Topbar";
import Product from "./Product";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function VideoDetail() {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getVideoById();
    getProductsById();
    getComments();
  });

  const getVideoById = async () => {
    fetch(`https://gigih-play-app.onrender.com/api/videos/${videoId}`)
      .then((response) => response.json())
      .then((data) => {
        setVideoData(data);
        setVideoUrl(data.youtubeUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getProductsById = async () => {
    fetch(`https://gigih-play-app.onrender.com/api/videos/${videoId}/product`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getComments = async () => {
    fetch(`https://gigih-play-app.onrender.com/api/videos/${videoId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const addComment = async (name, comment) => {
    const response = await fetch(
      `https://gigih-play-app.onrender.com/api/videos/${videoId}/comments`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          video_id: videoId,
          name: name,
          comment: comment,
        }),
      }
    );
    setComments([...comments, response.data]);
  };
  const getYoutubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return "error";
    }
  };

  const youtubeId = getYoutubeId(videoUrl);

  return (
    <div>
      <Topbar />
      <div className="flex flex-col w-full h-full px-5 mx-auto space-x-2 sm:px-10 xl:px-20 xl:flex-row">
        <div className="flex flex-col py-6 mt-5 border border-gray-200 rounded-lg">
          <div className="flex flex-row flex-grow h-full overflow-x-auto xl:overflow-y-auto xl:h-0 xl:flex-col scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="h-full px-2 py-6 mt-5 border border-gray-200 grow rounded-xl sm:px-6 lg:pl-8 xl:pl-6">
          <div className="flex items-center justify-between pr-3 mb-5">
            <h1 className="text-xl font-bold text-white">{videoData.title}</h1>
          </div>
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-full border-none rounded-lg aspect-video"
              src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col w-full mt-5 border border-gray-200 rounded-lg xl:w-80">
          <div className="w-full p-4 border-b border-gray-200 sm:px-6">
            <h3 className="font-semibold text-white">Comments</h3>
          </div>
          <div className="flex-grow h-[300px] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200 overflow-y-auto xl:h-0">
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
          <div className="px-4 py-4 border-t border-gray-200 sm:px-6">
            <CommentForm handleSubmit={addComment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;
