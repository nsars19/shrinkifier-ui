import uniqid from "uniqid";
import styles from "./FileList.module.scss";
import { RiDeleteBack2Fill } from "react-icons/ri";

export default function FileList({ files, setFiles, setTotalSize }) {
  const sizeOf = (files) =>
    files.reduce((total, curr) => (total += curr.size), 0);

  const removeFile = (name) => {
    return () => {
      const newFiles = files.filter((file) => file.name !== name);
      setFiles(newFiles);
      setTotalSize({ pre: sizeOf(newFiles), post: 0 });
    };
  };

  return (
    <section className={styles.listWrap}>
      <ul className={styles.list}>
        {files.map(({ name }) => (
          <li key={uniqid()}>
            <p>{name}</p>
            <span onClick={removeFile(name)}>
              <RiDeleteBack2Fill />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
