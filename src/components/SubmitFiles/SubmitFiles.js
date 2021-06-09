export default function SubmitFiles(props) {
  const { files, setErrorMsg, totalSize, setTotalSize, setFileDownload } =
    props;

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
    }

    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const res = await fetch("https://young-oasis-86497.herokuapp.com/", {
      method: "post",
      mode: "cors",
      body: formData,
    });

    const data = await res.blob();
    const url = URL.createObjectURL(data);

    setTotalSize({ ...totalSize, post: data.size });
    setFileDownload([url]);
  };

  return <button onClick={onSubmit}>Submit Images</button>;
}
