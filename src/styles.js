import styles from "./styles.css?inline";

export const stylesheet = new CSSStyleSheet();

stylesheet.replaceSync(styles);

export default stylesheet;
