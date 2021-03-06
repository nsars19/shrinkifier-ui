import filesize from "filesize";
import styles from "./FileInfo.module.scss";

export default function FileInfo({ fileSize: { pre, post } }) {
  const pctDiff = parseFloat(((pre - post) / pre) * 100).toFixed(2);
  const pctSaved = () => {
    if (pctDiff > 0) {
      return <p>{pre && post ? `The files are ${pctDiff}% smaller!` : ""}</p>;
    } else {
      return (
        <p>{pre && post ? `The files are ${pctDiff * -1}% larger!` : ""}</p>
      );
    }
  };

  const originalSize = (
    <p>{post ? "processed total: " + filesize(post) : ""}</p>
  );

  const processedSize = (
    <p>{pre ? "preprocessed total: " + filesize(pre) : ""}</p>
  );

  return (
    <section className={styles.infoWrap}>
      <div
        className={styles.info}
        style={{
          display: pre ? "block" : "none",
        }}
      >
        {pctSaved()}
        {originalSize}
        {processedSize}
      </div>
    </section>
  );
}
