import "./App.css";
import { useState, useEffect } from "react";
import sanityClient from "./client";

import Clock from "./components/Clock.jsx";
import Folder from "./components/Folder.jsx";
import Loading from "./components/Loading";

function App() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [textData, setTextData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "imagePost"] {
          _id, 
          name, 
          file{
            asset->{
             _id,
             url
            },
          },
          signature,
          _type
        }`,
      )
      .then((data) => setImageData(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "textPost"] {
          _id,
          name,
          text,
          signature,
          _type
        }`,
      )
      .then((data) => setTextData(data))
      .catch(console.error)

      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="p-4">
      <div className="flex flex-col">
        <Clock />
        <div className="text-1xl">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷</div>
        <img
          src="/2.gif"
          className="my-2 size-[50px] cursor-help"
          onClick={() => {
            setFolderOpen(!folderOpen);
            // playAudio();
          }}
        />
        {folderOpen ? (
          <Folder imageData={imageData} textData={textData} />
        ) : null}
      </div>
      {/* <audio controls src="/propulsoooooooooooooor.mp3" /> */}
    </div>
  );
}

export default App;
