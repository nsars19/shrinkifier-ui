import React, { useState } from "react";
import FileList from "./components/FileList/FileList";
import FileInfo from "./components/FileInfo/FileInfo";
import ZipDownload from "./components/ZipDownload/ZipDownload";
import FileInput from "./components/FileInput/FileInput";
import SubmitFiles from "./components/SubmitFiles/SubmitFiles";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import Options from "./components/Options/Options";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

function App() {
  const [files, setFiles] = useState([]);
  const [fileDownload, setFileDownload] = useState([]);
  const [totalSize, setTotalSize] = useState({ pre: 0, post: 0 });
  const [errorMsg, setErrorMsg] = useState("");
  const [processing, setProcessing] = useState(false);
  const [hasServerError, setServerError] = useState(false);
  const [options, setOptions] = useState({
    height: "",
    width: "",
    format: "",
    quality: "",
  });

  const clearDownload = () => setFileDownload([]);

  return (
    <ErrorBoundary hasError={hasServerError}>
      <FileInput
        setTotalSize={setTotalSize}
        setErrorMsg={setErrorMsg}
        setFiles={setFiles}
        clearDownload={clearDownload}
      />
      <Options options={options} setOptions={setOptions} />
      <SubmitFiles
        files={files}
        setErrorMsg={setErrorMsg}
        setTotalSize={setTotalSize}
        setFileDownload={setFileDownload}
        processing={processing}
        setProcessing={setProcessing}
        options={options}
        setError={setServerError}
      />
      <ZipDownload file={fileDownload} />
      <FileInfo fileSize={totalSize} />
      <ErrorMessage msg={errorMsg} />
      <FileList files={files} setFiles={setFiles} setTotalSize={setTotalSize} />
      <Loader loading={processing} />
    </ErrorBoundary>
  );
}

export default App;
