import React, { useState } from "react";
import FileList from "./components/FileList/FileList";
import FileInfo from "./components/FileInfo/FileInfo";
import ZipDownload from "./components/ZipDownload/ZipDownload";
import FileInput from "./components/FileInput/FileInput";
import SubmitFiles from "./components/SubmitFiles/SubmitFiles";

function App() {
  const [files, setFiles] = useState([]);
  const [fileDownload, setFileDownload] = useState([]);
  const [totalSize, setTotalSize] = useState({ pre: 0, post: 0 });
  const [errorMsg, setErrorMsg] = useState("");

  const convertToArray = (files) => [...files];
  const slicedArray = (files) => convertToArray(files).slice(0, 50);
  const clearDownload = () => setFileDownload([]);

  return (
    <>
      <FileInput
        setTotalSize={setTotalSize}
        setErrorMsg={setErrorMsg}
        setFiles={setFiles}
        slicedArray={slicedArray}
        clearDownload={clearDownload}
      />
      <SubmitFiles
        files={files}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
        totalSize={totalSize}
        setTotalSize={setTotalSize}
        setFileDownload={setFileDownload}
      />
      <ZipDownload file={fileDownload} />
      <p>{errorMsg}</p>
      <FileInfo fileSize={totalSize} />
      <FileList files={files} />
    </>
  );
}

export default App;
