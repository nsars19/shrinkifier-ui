import styles from "./ZipDownload.module.scss";

export default function ZipDownload({ file }) {
  return (
    <section className={styles.dlWrap}>
      {file.map((url) => (
        <a href={url} className={styles.link} key={Date.now()}>
          {url ? "Download" : ""}
        </a>
      ))}
    </section>
  );
}
