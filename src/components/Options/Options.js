import styles from "./Options.module.scss";
import { sizes } from "./sizes";

const style = (active) => {
  return {
    top: active ? "-10px" : "14px",
    left: active ? "4px" : "8px",
  };
};

export default function Options({ options, setOptions }) {
  const { quality, format, height, width } = options;

  const onFileTypeChange = (e) => {
    setOptions((prev) => ({ ...prev, format: e.target.value }));
  };

  const onHeightChange = (e) => {
    setOptions((prev) => ({ ...prev, height: e.target.value || "" }));
  };

  const onWidthChange = (e) => {
    setOptions((prev) => ({ ...prev, width: e.target.value || "" }));
  };

  const onQualityChange = (e) => {
    setOptions((prev) => ({ ...prev, quality: e.target.value }));
  };

  const qualityInput = () => {
    const opts = [<option key="null"></option>];
    for (let n = 10; n <= 100; n += 10) {
      opts.push(<option key={n}>{n}</option>);
    }

    return opts;
  };

  const imgSizes = () => {
    return sizes.map((n) => <option key={n}>{n}</option>);
  };

  return (
    <section className={styles.optionsWrap}>
      <span>
        <label className={styles.label} htmlFor="fileOptions">
          <select
            onChange={onFileTypeChange}
            id="fileOptions"
            name="fileOptions"
            className={styles.select}
            value={format}
          >
            <option></option>
            <option>jpeg</option>
            <option>webp</option>
            <option>png</option>
            <option>gif</option>
          </select>
          <p style={style(format)}>File Type</p>
        </label>
      </span>
      <span>
        <label className={styles.label} htmlFor="inputQuantity">
          <select
            onChange={onQualityChange}
            id="inputQuantity"
            name="quantity"
            className={styles.select}
            value={quality}
          >
            {qualityInput()}
          </select>
          <p style={style(quality)}>Quality</p>
        </label>
      </span>
      <span>
        <label className={styles.label} htmlFor="selectedHeight">
          <select
            onChange={onHeightChange}
            value={height}
            className={styles.input}
            id="selectedHeight"
            name="height"
            min="25"
            max="2000"
          >
            {imgSizes()}
          </select>
          <p style={style(height)}>Height</p>
        </label>
      </span>
      <span>
        <label className={styles.label} htmlFor="selectedWidth">
          <select
            onChange={onWidthChange}
            value={width}
            className={styles.input}
            id="selectedWidth"
            name="width"
            min="25"
            max="2000"
            filled={width}
          >
            {imgSizes()}
          </select>
          <p style={style(width)}>Width</p>
        </label>
      </span>
    </section>
  );
}
