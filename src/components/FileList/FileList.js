import uniqid from "uniqid";
import styles from "./FileList.module.scss";

export default function FileList({ files }) {
  return (
    <ul className={styles.list}>
      {files.map(({ name }) => (
        <li key={uniqid()}>{name}</li>
      ))}
    </ul>
  );
}
