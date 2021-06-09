import { useState } from "react";
import uniqid from "uniqid";
import filesize from "filesize";

function App() {
  const [files, setFiles] = useState([]);
  const [fileDownload, setFileDownload] = useState([]);
  const [dragged, setDragged] = useState(false);
  const [totalSize, setTotalSize] = useState({ pre: 0, post: 0 });
  const [errorMsg, setErrorMsg] = useState("");

  const convertToArray = (files) => [...files];
  const slicedArray = (files) => convertToArray(files).slice(0, 50);

  const goodFileTypes = () =>
    files.every((file) => {
      return file.type.split("/")[0] === "image";
    });

  const sizeOf = (files) =>
    slicedArray(files).reduce((total, curr) => (total += curr.size), 0);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragged(true);
  };

  const onDrop = (e) => {
    setDragged(false);
    e.preventDefault();
    const { files } = e.dataTransfer;

    setTotalSize({ pre: sizeOf(files), post: 0 });
    setFiles(slicedArray(files));
    setErrorMsg("");
  };

  const onFileInput = (e) => {
    const { files } = e.target;
    setFiles(slicedArray(files));
    setTotalSize({ pre: sizeOf(files), post: 0 });
    setErrorMsg("");
  };

  const onSubmit = async () => {
    if (!goodFileTypes() || errorMsg) {
      setErrorMsg(
        "You can only upload images. Please remove anything besides image files."
      );
      return;
    }

    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const res = await fetch("http://localhost:3000/", {
      method: "post",
      mode: "cors",
      body: formData,
    });

    const data = await res.blob();
    const url = URL.createObjectURL(data);

    setTotalSize({ ...totalSize, post: data.size });
    setFileDownload([url]);
  };

  const pctSaved = (
    <p>
      {totalSize.pre && totalSize.post
        ? `New files are ${parseFloat(totalSize.pre / totalSize.post).toFixed(
            2
          )}% of the original file size.`
        : ""}
    </p>
  );

  const originalSize = (
    <p>
      {totalSize.post ? "processed total: " + filesize(totalSize.post) : ""}
    </p>
  );

  const processedSize = (
    <p>
      {totalSize.pre ? "preprocessed total: " + filesize(totalSize.pre) : ""}
    </p>
  );

  return (
    <div>
      <label
        htmlFor="file-input"
        onDragOver={onDragOver}
        onDrop={onDrop}
        style={{
          height: 400,
          width: 400,
          border: "2px solid #404040",
          display: "block",
          background: dragged ? "#acfaac" : "none",
          transform: dragged ? "scale(0.9)" : "none",
          transition: "transform 1s ease, background 300ms ease",
        }}
      >
        <input
          id="file-input"
          onChange={onFileInput}
          type="file"
          multiple
          accept=".png,.jpg,.jpeg,.gif,.webp"
        />
      </label>
      <button onClick={onSubmit}>Submit Images</button>
      <div>
        {fileDownload.map((url) => (
          <a href={url} key={uniqid()}>
            {url ? "Download" : ""}
          </a>
        ))}
      </div>
      <div>
        <p>{errorMsg}</p>
        <div>
          {pctSaved}
          {originalSize}
          {processedSize}
        </div>
        <ul>
          {files.map(({ name }) => (
            <li key={uniqid()}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
