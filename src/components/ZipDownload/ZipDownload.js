import styles from "./ZipDownload.module.scss";

export default function ZipDownload({ file }) {
  return (
    <div>
      {file.map((url) => (
        <a href={url} className={styles.link} key={Date.now()}>
          {url ? "Download" : ""}
        </a>
      ))}
    </div>
  );
}
