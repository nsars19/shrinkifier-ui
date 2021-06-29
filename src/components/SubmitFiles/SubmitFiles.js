import styles from "./SubmitFiles.module.scss";

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
  } = props;

  const goodFileTypes = () =>
    files.every((file) => {
      return file.type.split("/")[0] === "image";
    });

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

    const formData = new FormData();

    formData.append("options", JSON.stringify(options));
    files.forEach((file) => formData.append("files", file));

    const res = await fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: "post",
      mode: "cors",
      body: formData,
    });

    if (res.status === 500) {
      setError(true);
    } else {
      const data = await res.blob();
      const file = new File([data], "tinified.zip");
      const url = URL.createObjectURL(file);

      setTotalSize((prev) => ({ ...prev, post: data.size }));
      setFileDownload([url]);
      setProcessing(false);
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
