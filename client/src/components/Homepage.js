import React from "react";
import VideoList from "./VideoList";
import Topbar from "./Topbar";

function Homepage() {
  return (
    <div className="main-container mx-4 mb-16">
      <Topbar />
      <VideoList />
    </div>
  );
}

export default Homepage;
