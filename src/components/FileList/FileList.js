import uniqid from "uniqid";
import styles from "./FileList.module.scss";

export default function FileList({ files }) {
  return (
    <section className={styles.listWrap}>
      <ul className={styles.list}>
        {files.map(({ name }) => (
          <li key={uniqid()}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
