import { LitElement, css, html } from "lit";
import stylesheet from "./styles";

export class MyElement extends LitElement {
  static get styles() {
    return [stylesheet];
  }

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
        <button class="btn" @click=${this._onClick}>
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
