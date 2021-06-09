import React, { useState } from "react";
import FileList from "./components/FileList/FileList";
import FileInfo from "./components/FileInfo/FileInfo";
import ZipDownload from "./components/ZipDownload/ZipDownload";
import FileInput from "./components/FileInput/FileInput";
import SubmitFiles from "./components/SubmitFiles/SubmitFiles";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";

function App() {
  const [files, setFiles] = useState([]);
  const [fileDownload, setFileDownload] = useState([]);
  const [totalSize, setTotalSize] = useState({ pre: 0, post: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [processing, setProcessing] = useState(false);

  const clearDownload = () => setFileDownload([]);

  return (
    <>
      <FileInput
        setTotalSize={setTotalSize}
        setErrorMsg={setErrorMsg}
        setFiles={setFiles}
        clearDownload={clearDownload}
      />
      <SubmitFiles
        files={files}
        setErrorMsg={setErrorMsg}
        totalSize={totalSize}
        setTotalSize={setTotalSize}
        setFileDownload={setFileDownload}
        processing={processing}
        setProcessing={setProcessing}
      />
      <ErrorMessage msg={errorMsg} />
      <ZipDownload file={fileDownload} />
      <FileInfo fileSize={totalSize} />
      <FileList files={files} />
      <Loader loading={processing} />
    </>
  );
}

export default App;
