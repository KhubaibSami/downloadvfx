import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../landing/mainPage";
import Audio from "../audio/audio";
import Video from "../video/video";
import Model from "../3D/model";

const routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/video" element={<Video />} />
        <Route path="/Model" element={<Model />} />
      </Routes>
    </>
  );
};

export default routing;
