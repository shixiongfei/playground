/*
 * styles.js
 *
 * Copyright (c) 2026 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/playground
 */

import { LitElement } from "lit";
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

export class StyledElement extends LitElement {
  static get styles() {
    return [stylesheet];
  }
}

export default stylesheet;
