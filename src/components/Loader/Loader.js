import { FaSpinner } from "react-icons/fa";
import styles from "./Loader.module.scss";

export default function Loader({ loading }) {
  return (
    <section
      className={styles.loadWrap}
      style={{
        display: loading ? "grid" : "none",
      }}
    >
      <div className={styles.border}>
        <FaSpinner className={styles.icon} />
      </div>
    </section>
  );
}
