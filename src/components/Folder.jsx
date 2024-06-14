import { useState } from "react";

export default function Folder({ data }) {
  const [fileOpen, setFileOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  function handleFileOpen(file) {
    setFileOpen(true);
    setCurrentFile(file);
  }

  return (
    <div className="">
      <div className="mb-2">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data</div>
      {data &&
        data.map((file, index) => (
          <div
            key={file._id}
            onClick={() => handleFileOpen(file)}
            className="cursor-pointer text-xs"
          >
            → {file.name}
          </div>
        ))}
      {fileOpen ? (
        <div>
          <img src={currentFile.file.asset.url} className="h-[500px] py-2" />
          <div className="text-xs">~/p̸r̴o̶p̶u̸l̴s̸o̴r̷/data/{currentFile.name}</div>
          {currentFile.signature !== "" && (
            <div className="text-xs">
              ⁛⁜⁝⁞:{" "}
              <span className="line-through">{currentFile.signature}</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
