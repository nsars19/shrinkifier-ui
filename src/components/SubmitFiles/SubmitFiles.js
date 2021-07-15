import styles from "./SubmitFiles.module.scss";
import imageCompression from "browser-image-compression";

export default function SubmitFiles(props) {
  const {
    files,
    setErrorMsg,
    setTotalSize,
    setFileDownload,
    processing,
    setProcessing,
    options,
    setError,
    zip,
  } = props;

  const goodFileTypes = () =>
    files.every((file) => {
      return file.type.split("/")[0] === "image";
    });

  const compress = async (files) => {
    const opts = {
      maxWidthOrHeight: options.maxDimension || 720,
      fileType: `image/${options.format || "jpeg"}`,
    };

    for (const file of files) {
      await imageCompression(file, opts).then((data) => {
        const fileName = data.name.split(".")[0];
        const ext = `.${options.format || "jpeg"}`;
        zip.file(fileName + ext, data);
      });
    }
  };

  const onSubmit = async () => {
    if (!goodFileTypes()) {
      setErrorMsg(
        "You can only upload images. Please remove anything besides image files."
      );
      return;
    } else if (files.length === 0) {
      setErrorMsg("Try adding some images first!");
      return;
    }

    setErrorMsg("");
    setProcessing(true);

    try {
      await compress(files);

      zip.generateAsync({ type: "blob" }).then((zip) => {
        setTotalSize((prev) => ({ ...prev, post: zip.size }));
        const url = URL.createObjectURL(zip);
        setFileDownload([url]);
        setProcessing(false);
      });
    } catch {
      setError(true);
    }
  };

  return (
    <section className={styles.buttonContainer}>
      <div className={styles.outline}>
        <button
          onClick={onSubmit}
          className={styles.button}
          disabled={processing}
        >
          Compress Images
        </button>
      </div>
    </section>
  );
}
