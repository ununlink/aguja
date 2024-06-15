import { useState } from "react";

export default function Folder({ imageData, textData, audioData }) {
  const [fileOpen, setFileOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  function handleFileOpen(file) {
    setFileOpen(true);
    setCurrentFile(file);
  }
  const data = [imageData, textData, audioData];

  console.log(data);
  return (
    <div className="">
      <div className="mb-2">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data</div>
      {data &&
        data.map((arr) =>
          arr.map((file) => (
            <div
              key={file._id}
              onClick={() => handleFileOpen(file)}
              className="cursor-pointer text-xs"
            >
              {file.name != null ? file.name : "¯\\_(ツ)_/¯"}
            </div>
          )),
        )}
      {fileOpen && currentFile._type === "textPost" ? (
        <div className="max-w-prose py-2">{currentFile.text}</div>
      ) : fileOpen && currentFile._type === "imagePost" ? (
        <div>
          <img src={currentFile?.file.asset.url} className="h-[500px] py-2" />
          <div className="text-xs">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data/{currentFile?.name}</div>
        </div>
      ) : fileOpen && currentFile._type === "audioPost" ? (
        <audio controls src={currentFile?.file.asset.url} className="py-2" />
      ) : null}
      {currentFile?.signature != null && (
        <div className="text-xs">
          ⁛⁜⁝⁞: <span className="line-through">{currentFile?.signature}</span>
        </div>
      )}
    </div>
  );
}
