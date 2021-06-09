import styles from "./FileInput.module.scss";
import { FaFileImage } from "react-icons/fa";

export default function FileInput(props) {
  const { setTotalSize, setErrorMsg, setFiles, slicedArray, clearDownload } =
    props;

  const sizeOf = (files) =>
    slicedArray(files).reduce((total, curr) => (total += curr.size), 0);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
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
      className={styles.label}
    >
      <FaFileImage className={styles.icon} />
      <h2>Drag your .jpg, .png, .gif, .webp files here</h2>
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
