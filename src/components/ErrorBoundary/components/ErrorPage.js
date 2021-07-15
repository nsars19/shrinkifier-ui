import { BiErrorAlt } from "react-icons/bi";
import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  return (
    <section className={styles.sectionWrap}>
      <div className={styles.contentWrap}>
        <BiErrorAlt className={styles.icon} />
        <h1 className={styles.header}>Something went wrong!</h1>
      </div>
    </section>
  );
};
