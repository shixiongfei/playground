/*
 * app-main.js
 *
 * Copyright (c) 2026 Xiongfei Shi
 *
 * Author: Xiongfei Shi <xiongfei.shi(a)icloud.com>
 * License: Apache-2.0
 *
 * https://github.com/shixiongfei/playground
 */

import { html } from "lit";
import { StyledElement } from "./styles.js";
import "./components/my-element.js";

export class AppMain extends StyledElement {
  render() {
    return html`
      <div class="w-screen h-screen flex justify-center items-center">
        <my-element>
          <h1 class="underline text-2xl">It worked!</h1>
        </my-element>
      </div>
    `;
  }
}

window.customElements.define("app-main", AppMain);
