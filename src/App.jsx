import "./App.css";
import { useState, useEffect } from "react";
import {
  getImageData,
  getTextData,
  getAudioData,
  getVideoData,
  getLinksAndFiles,
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
  const [linksAndFiles, setLinksAndFiles] = useState(null);
  const [loading, setLoading] = useState(true);
  const [randomImage, setRandomImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      .catch(console.error);

    getLinksAndFiles()
      .then((data) => setLinksAndFiles(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  const password = "6167756a61"; // ¯\_(ツ)_/¯

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const newPosition = {
      x: (clientX / window.innerWidth) * 100,
      y: (clientY / window.innerHeight) * 100,
    };
    setMousePosition(newPosition);
  };

  if (loading) return <Loading />;

  return (
    <div className="pb-6">
      {/* <div
        className="pointer-events-none fixed left-0 top-0 z-20 h-screen w-screen mix-blend-color-dodge"
        style={{
          backgroundImage: `url(${imageData && imageData.find((item) => item.cover)?.file.asset.url + "?fm=webp"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      ></div> */}
      <div
        className="fixed left-0 top-0 z-10 h-screen w-screen cursor-crosshair overflow-hidden bg-center opacity-100"
        style={{
          // backgroundImage: `url(${imageData && imageData.find((item) => item.cover)?.file.asset.url})`,
          backgroundImage: `url(${
            (imageData &&
              imageData[Math.floor(Math.random() * imageData.length)].file.asset
                .url + "?fm=webp") ||
            ""
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative opacity-95 mix-blend-color-burn">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-screen w-[150%] bg-black/70"></div>
          <div
            onMouseMove={handleMouseMove}
            className="absolute bottom-0 left-0 right-0 top-0 h-screen w-full bg-[#fff]"
            style={{
              maskImage: `radial-gradient(ellipse 600px 600px at ${mousePosition.x}% ${mousePosition.y}%, red 10%, transparent 90%)`,
            }}
          ></div>
        </div>
        {/* <img
          className="h-full w-full"
          src={
            imageData && imageData.find((item) => item.cover)?.file.asset.url
          }
        /> */}
      </div>

      {/* <div className="fixed z-20">
        <div className="flex w-full flex-col px-4 pt-4">
          <Clock />
          <div className="text-1xl">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷</div>
        </div>
        <div className="flex flex-col md:columns-2 md:flex-col">
          <div className="px-4">
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
          {!folderOpen && linksAndFiles && (
            <div className="p-4 text-xs md:text-sm">
              <h1 className="my-1 text-base font-bold">internet:</h1>
              <ul>
                {linksAndFiles.map((item) => (
                  <li key={item._id}>
                    <a href={item.link} target="_blank" className="block w-max">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div> */}
      <div className="fixed bottom-0 z-20 mb-4 flex flex-col items-start gap-2 px-4 text-[#ff2f00] drop-shadow-[0_0_2px_#ff2f00] sm:px-0">
        {/* <Clock /> */}

        <Fechas />
      </div>
      <div className="fixed z-40">
        <Link />
      </div>
    </div>
  );
}

export default App;
