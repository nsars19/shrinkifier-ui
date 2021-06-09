import { useState } from "react";

export default function FileInput(props) {
  const { setTotalSize, setErrorMsg, setFiles, slicedArray, clearDownload } =
    props;

  const [dragged, setDragged] = useState(false);

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
    clearDownload();
  };

  const onFileInput = (e) => {
    const { files } = e.target;
    setFiles(slicedArray(files));
    setTotalSize({ pre: sizeOf(files), post: 0 });
    setErrorMsg("");
    clearDownload();
  };

  return (
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
  );
}
