import { html } from "lit";
import { StyledElement } from "../styles.js";

export class MyElement extends StyledElement {
  static get properties() {
    return {
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <div class="flex flex-col gap-2 justify-center items-center">
        <slot></slot>
        <button class="btn btn-accent" @click=${this._onClick}>
          Count is ${this.count}
        </button>
      </div>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define("my-element", MyElement);
