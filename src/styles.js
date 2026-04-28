import styles from "./styles.css?inline";

/**
 * Load CSS Style Sheet
 * @param {string} text
 * @returns {Promise<CSSStyleSheet | import("lit").CSSResult>}
 */
export const loadStyleSheet = async (text) => {
  try {
    return await new CSSStyleSheet().replace(text);
  } catch {
    const { unsafeCSS } = await import("lit");
    return unsafeCSS(text);
  }
};

export const stylesheet = await loadStyleSheet(styles);
export default stylesheet;
