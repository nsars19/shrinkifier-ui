import { useState } from "react";
import uniqid from "uniqid";

function App() {
  const [files, setFiles] = useState([]);

  const convertToArray = (files) => [...files];
  const slicedArray = (files) => convertToArray(files).slice(0, 10);

  const onDrop = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
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

    const { zipFile } = await res.json();
    const file = new File(zipFile.data, "results.zip");
  };

  return (
    <div>
      <label
        htmlFor="file-input"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        style={{
          height: 400,
          width: 400,
          border: "2px solid #404040",
          display: "block",
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
