import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos/:videoId" element={<VideoDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
