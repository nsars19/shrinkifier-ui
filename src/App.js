import { useState } from "react";
import uniqid from "uniqid";
import filesize from "filesize";

function App() {
  const [files, setFiles] = useState([]);
  const [fileDownload, setFileDownload] = useState([]);
  const [dragged, setDragged] = useState(false);
  const [totalSize, setTotalSize] = useState({ pre: 0, post: 0 });

  const convertToArray = (files) => [...files];
  const slicedArray = (files) => convertToArray(files).slice(0, 50);

  const onDragOver = (e) => {
    e.preventDefault();
    setDragged(true);
  };

  const onDrop = (e) => {
    setDragged(false);
    e.preventDefault();
    const { files } = e.dataTransfer;
    const size = slicedArray(files).reduce(
      (total, curr) => (total += curr.size),
      0
    );

    setTotalSize({ ...totalSize, pre: size });
    setFiles(slicedArray(files));
  };

  const onFileInput = (e) => {
    const { files } = e.target;
    setFiles(slicedArray(files));
  };

  const onSubmit = async () => {
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
