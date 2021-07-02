import styles from "./ZipDownload.module.scss";

export default function ZipDownload({ file }) {
  return (
    <section
      className={styles.dlWrap}
      style={{
        display: file.length ? "grid" : "none",
      }}
    >
      {file.map((url) => (
        <div className={styles.linkWrap} key={Date.now()}>
          <a href={url} className={styles.link} download="tinified.zip">
            {url ? "Download Files" : ""}
          </a>
        </div>
      ))}
    </section>
  );
}
