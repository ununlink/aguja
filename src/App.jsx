import "./App.css";
import { useState, useEffect } from "react";
import {
  getImageData,
  getTextData,
  getAudioData,
  getVideoData,
} from "./sanity/sanity-utils.js";

import Clock from "./components/Clock.jsx";
import Folder from "./components/Folder.jsx";
import Loading from "./components/Loading";
import Protected from "./components/Protected.jsx";
import Link from "./components/Link.jsx";
import Fechas from "./components/Fechas.jsx";

function App() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [textData, setTextData] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState(null);

  useEffect(() => {
    getImageData()
      .then((data) => setImageData(data))
      .catch(console.error);

    getTextData()
      .then((data) => setTextData(data))
      .catch(console.error);

    getAudioData()
      .then((data) => setAudioData(data))
      .catch(console.error);

    getVideoData()
      .then((data) => setVideoData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  const password = "6167756a61";

  if (loading) return <Loading />;

  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col">
          <Clock />
          <div className="text-1xl">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷</div>
        </div>
        <Protected password={password}>
          <img
            src="/2.gif"
            className="my-2 size-[50px] cursor-help"
            onClick={() => {
              setFolderOpen(!folderOpen);
            }}
          />
          {folderOpen ? (
            <Folder
              imageData={imageData}
              textData={textData}
              audioData={audioData}
              videoData={videoData}
            />
          ) : null}
        </Protected>
        <Link />
        {!folderOpen && (
          <div className="my-4">
            <Fechas />
          </div>
        )}
      </div>

      {!folderOpen && (
        <div className="flex md:w-full md:p-4">
          <img
            className="invert hover:invert-0 md:h-[200px]"
            src={
              imageData &&
              imageData[Math.floor(Math.random() * imageData.length)].file.asset
                .url
            }
          />
        </div>
      )}
    </div>
  );
}

export default App;
