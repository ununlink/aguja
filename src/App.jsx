import "./App.css";
import { useState } from "react";
import Clock from "./components/Clock.jsx";
import Folder from "./components/Folder.jsx";

function App() {
  const [folderOpen, setFolderOpen] = useState(false);
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
        {folderOpen ? <Folder /> : null}
      </div>
      {/* <audio controls src="/propulsoooooooooooooor.mp3" /> */}
    </div>
  );
}

export default App;
