import { useState } from "react";

export default function Folder({ data }) {
  const [fileOpen, setFileOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const files = ["image_2023-10-24.jpeg"];

  function handleFileOpen(file) {
    setFileOpen(true);
    setCurrentFile(file);
  }

  return (
    <div className="">
      <div>~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data</div>
      {data &&
        data.map((file, index) => (
          <div
            key={file._id}
            onClick={() => handleFileOpen(file)}
            className="cursor-pointer"
          >
            → {file.name}
          </div>
        ))}
      {fileOpen ? (
        <div>
          <img src={currentFile.file.asset.url} className="h-[500px]" />
          <div>~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data/{currentFile.name}</div>
        </div>
      ) : null}
    </div>
  );
}
