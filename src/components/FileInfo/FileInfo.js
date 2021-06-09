import filesize from "filesize";
import styles from "./FileInfo.module.scss";

export default function FileInfo({ fileSize: { pre, post } }) {
  const pctSaved = (
    <p>
      {pre && post
        ? `New files are ${parseFloat(pre / post).toFixed(
            2
          )}% of the original file size.`
        : ""}
    </p>
  );

  const originalSize = (
    <p>{post ? "processed total: " + filesize(post) : ""}</p>
  );

  const processedSize = (
    <p>{pre ? "preprocessed total: " + filesize(pre) : ""}</p>
  );

  return (
    <div className={styles.info}>
      {pctSaved}
      {originalSize}
      {processedSize}
    </div>
  );
}
