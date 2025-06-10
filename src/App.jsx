import "./App.css";
import { useState, useEffect } from "react";
import {
  getImageData,
  getTextData,
  getAudioData,
  getVideoData,
  getLinksAndFiles,
} from "./sanity/sanity-utils.js";

import Countdown from "./components/Countdown.jsx";
import Folder from "./components/Folder.jsx";
import Loading from "./components/Loading";
import Protected from "./components/Protected.jsx";
import Link from "./components/Link.jsx";
import Fechas from "./components/Fechas.jsx";
import Player from "./components/Player.jsx";
import Cursor from "./components/Cursor.jsx";

const PREMIERE_DATE = "2025-06-12T14:00:00Z";
const SOUNDCLOUD_EMBED =
  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1720060338&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/aguja6167756a61" title="aguja" target="_blank" style="color: #cccccc; text-decoration: none;">aguja</a> · <a href="https://soundcloud.com/aguja6167756a61/sets/un002-musica-electronica-i" title="[UN002] M​ú​sica Electr​ó​nica I" target="_blank" style="color: #cccccc; text-decoration: none;">[UN002] M​ú​sica Electr​ó​nica I</a></div>';

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
  const [esHora, setEsHora] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    getImageData()
      .then((data) => setImageData(data))
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
        className="fixed left-0 top-0 h-screen w-screen cursor-crosshair overflow-hidden bg-center opacity-100"
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
        {/* <img */}
        {/*   className="h-full w-full" */}
        {/*   src={ */}
        {/*     imageData && imageData.find((item) => item.cover)?.file.asset.url */}
        {/*   } */}
        {/* /> */}
      </div>

      {/* <div className="fixed z-20"> */}
      {/*   <div className="flex w-full flex-col px-4 pt-4"> */}
      {/*     <div className="text-1xl">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷</div> */}
      {/*   </div> */}
      {/*   <div className="flex flex-col md:columns-2 md:flex-col"> */}
      {/*     <div className="px-4"> */}
      {/*       <Protected password={password}> */}
      {/*         <img */}
      {/*           src="/2.gif" */}
      {/*           className="my-2 size-[50px] cursor-help" */}
      {/*           onClick={() => { */}
      {/*             setFolderOpen(!folderOpen); */}
      {/*           }} */}
      {/*         /> */}
      {/*         {folderOpen ? ( */}
      {/*           <Folder */}
      {/*             imageData={imageData} */}
      {/*             textData={textData} */}
      {/*             audioData={audioData} */}
      {/*             videoData={videoData} */}
      {/*           /> */}
      {/*         ) : null} */}
      {/*       </Protected> */}
      {/*       <Link /> */}
      {/*       {!folderOpen && ( */}
      {/*         <div className="my-4"> */}
      {/*           <Fechas /> */}
      {/*         </div> */}
      {/*       )} */}
      {/*     </div> */}
      {/*     {!folderOpen && linksAndFiles && ( */}
      {/*       <div className="p-4 text-xs md:text-sm"> */}
      {/*         <h1 className="my-1 text-base font-bold">internet:</h1> */}
      {/*         <ul> */}
      {/*           {linksAndFiles.map((item) => ( */}
      {/*             <li key={item._id}> */}
      {/*               <a href={item.link} target="_blank" className="block w-max"> */}
      {/*                 {item.name} */}
      {/*               </a> */}
      {/*             </li> */}
      {/*           ))} */}
      {/*         </ul> */}
      {/*       </div> */}
      {/*     )} */}
      {/*   </div> */}
      {/* </div> */}

      {isVideoVisible && (
        <div className="pointer-events-none fixed z-20 flex h-screen w-full items-center justify-center">
          <iframe
            width="560"
            className="pointer-events-auto"
            height="315"
            src="https://www.youtube.com/embed/flh0wGaj4jM?si=bkwHWlLnAjUQ2u9W"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen="1"
          ></iframe>
        </div>
      )}

      <div className="fixed left-4 top-2 z-20 mb-4 flex flex-col items-start gap-2 px-4 text-xl text-[#fff] sm:px-0">
        {esHora && (
          <div
            onClick={() => setIsVideoVisible(isVideoVisible ? false : true)}
            className="px-2 hover:bg-[#f00]"
          >
            {isVideoVisible ? "(X) " : "(O) "}
            PROPULSOR
          </div>
        )}
        <Countdown
          targetDateTime={PREMIERE_DATE}
          onComplete={() => setEsHora(true)}
        />

        <Fechas />
        <ul className="fixed right-4 top-2 flex rotate-180 text-xs uppercase [writing-mode:vertical-lr]">
          <li className="py-2 leading-none hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://www.ninaprotocol.com/releases/aguja-m-u-sica-electr-onica-i"
            >
              nina
            </a>
          </li>
          <li className="py-2 leading-none hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
            >
              bandcamp
            </a>
          </li>
          <li className="py-2 leading-none hover:bg-[#f00]">
            <a target="_blank" href="https://soundcloud.com/aguja6167756a61">
              soundcloud
            </a>
          </li>
          <li className="py-2 leading-none hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://www.instagram.com/aguja6167756a61/"
            >
              instagram
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="fixed z-40"> */}
      {/*   <Link /> */}
      {/* </div> */}

      <Player embed={SOUNDCLOUD_EMBED} />
      <Cursor />
    </div>
  );
}

export default App;
