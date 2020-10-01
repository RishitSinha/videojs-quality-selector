import qualitySelector from "@silvermine/videojs-quality-selector";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./App.css";
import vid_1080p from "./assets/POTF_1080p.mp4";
import vid_480p from "./assets/POTF_480p.mp4";
import vid_720p from "./assets/POTF_720p.mp4";

qualitySelector(videojs);

const options = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: vid_1080p,
      type: "video/mp4",
      label: "1080p",
      selected: true,
    },
    {
      src: vid_720p,
      type: "video/mp4",
      label: "720p",
    },
    {
      src: vid_480p,
      type: "video/mp4",
      label: "480p",
    },
  ],
};

function App() {
  const videoNode = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    player.current = videojs(
      videoNode.current,
      options,
      function onPlayerReady() {
        this.controlBar.addChild("QualitySelector");
      }
    );

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, []);

  return (
    <div className="App">
      <video ref={videoNode} className="video-js vjs-default-skin" />
    </div>
  );
}

export default App;
