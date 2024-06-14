import { useState } from "react";

export default function Folder() {
  const [fileOpen, setFileOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const files = ["image_2023-10-24.jpeg"];

  function handleFileOpen(file) {
    setFileOpen(true);
    setCurrentFile(file);
  }

  return (
    <div className="">
      <div>~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/files</div>
      {files.map((file) => (
        <div key={file} onClick={() => handleFileOpen(file)}>
          → {file}
        </div>
      ))}
      {fileOpen ? (
        <div>
          <img src={`/${currentFile}`} className="h-[500px]" />
          <div>~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/files/{currentFile}</div>
        </div>
      ) : null}
    </div>
  );
}
