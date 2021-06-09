import styles from "./ErrorMessage.module.scss";

export default function ErrorMessage({ msg }) {
  return (
    <section className={styles.errorWrap}>
      <p className={styles.message}>{msg}</p>
    </section>
  );
}
