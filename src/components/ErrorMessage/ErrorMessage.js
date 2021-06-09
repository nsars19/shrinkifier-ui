import styles from "./ErrorMessage.module.scss";

export default function ErrorMessage({ msg }) {
  return (
    <section
      className={styles.errorWrap}
      style={{
        display: msg ? "block" : "none",
      }}
    >
      <p className={styles.message}>{msg}</p>
    </section>
  );
}
