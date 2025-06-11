import { useState, useEffect } from "react";
import { getImageData } from "./sanity/sanity-utils.js";
import { AnimatePresence, motion } from "framer-motion";

import Countdown from "./components/Countdown.jsx";
import Loading from "./components/Loading";
import Fechas from "./components/Fechas.jsx";
import Player from "./components/Player.jsx";
import Cursor from "./components/Cursor.jsx";
import YouTubeLiveChat from "./components/YouTubeLiveChat.jsx";
import Credits from "./components/Credits.jsx";

const PREMIERE_DATE = "2025-06-12T14:00:00Z";
const SOUNDCLOUD_EMBED =
  '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1720060338&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/aguja6167756a61" title="aguja" target="_blank" style="color: #cccccc; text-decoration: none;">aguja</a> · <a href="https://soundcloud.com/aguja6167756a61/sets/un002-musica-electronica-i" title="[UN002] M​ú​sica Electr​ó​nica I" target="_blank" style="color: #cccccc; text-decoration: none;">[UN002] M​ú​sica Electr​ó​nica I</a></div>';

function App() {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [esHora, setEsHora] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [creditsOpen, setCreditsOpen] = useState(false);

  useEffect(() => {
    getImageData()
      .then((data) => setImageData(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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
      <div
        className="fixed left-0 top-0 h-screen w-screen cursor-crosshair overflow-hidden bg-center opacity-100"
        style={{
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
      </div>

      <AnimatePresence mode="wait">
        {isVideoVisible && (
          <motion.div
            key="propulsor-youtube-embed"
            className="pointer-events-none fixed z-20 flex aspect-video h-screen w-full items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="aspect-video w-4/5 rounded bg-black">
              <iframe
                width="100%"
                className="pointer-events-auto rounded"
                height="100%"
                src="https://www.youtube.com/embed/flh0wGaj4jM?si=bkwHWlLnAjUQ2u9W"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowfullscreen="1"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed left-4 top-2 z-20 mb-4 flex flex-col items-start gap-2 px-4 text-xl text-[#fff] sm:px-0">
        {esHora && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsVideoVisible(isVideoVisible ? false : true)}
              className="cursor-pointer sm:hover:bg-[#f00]"
            >
              {isVideoVisible ? "(X) " : "(O) "}
              PROPULSOR
            </button>
            {!isVideoVisible && (
              <motion.div
                className=""
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                &lt;--
              </motion.div>
            )}
          </div>
        )}
        <Countdown
          targetDateTime={PREMIERE_DATE}
          onComplete={() => setEsHora(true)}
        />

        <button
          onClick={() => setCreditsOpen(!creditsOpen)}
          className="z-[200] border px-2 text-sm sm:hover:bg-[#f00]"
        >
          ?
        </button>
        <Fechas />
        <ul className="fixed right-4 top-2 flex rotate-180 text-xs uppercase [writing-mode:vertical-lr]">
          <li className="py-2 leading-none sm:hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://www.ninaprotocol.com/releases/aguja-m-u-sica-electr-onica-i"
            >
              nina
            </a>
          </li>
          <li className="py-2 leading-none sm:hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://unun.bandcamp.com/album/un002-m-sica-electr-nica-i"
            >
              bandcamp
            </a>
          </li>
          <li className="py-2 leading-none sm:hover:bg-[#f00]">
            <a target="_blank" href="https://soundcloud.com/aguja6167756a61">
              soundcloud
            </a>
          </li>
          <li className="py-2 leading-none sm:hover:bg-[#f00]">
            <a
              target="_blank"
              href="https://www.instagram.com/aguja6167756a61/"
            >
              instagram
            </a>
          </li>
        </ul>
      </div>

      <AnimatePresence mode="wait">
        {creditsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            key="credits"
          >
            <Credits
              closeCredits={() => {
                setCreditsOpen(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <YouTubeLiveChat />
      <Player embed={SOUNDCLOUD_EMBED} />
      <Cursor />
    </div>
  );
}

export default App;
