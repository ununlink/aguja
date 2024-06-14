import "./App.css";
import { useState, useEffect } from "react";
import sanityClient from "./client";

import Clock from "./components/Clock.jsx";
import Folder from "./components/Folder.jsx";
import Loading from "./components/Loading";

function App() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [data, setData] = useState(null);
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
         signature
        }`,
      )
      .then((data) => setData(data))
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
        {folderOpen ? <Folder data={data} /> : null}
      </div>
      {/* <audio controls src="/propulsoooooooooooooor.mp3" /> */}
    </div>
  );
}

export default App;
