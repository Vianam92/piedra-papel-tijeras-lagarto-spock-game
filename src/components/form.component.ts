import { Router } from "@vaadin/router";
import { LitElement, html, css } from "lit";
import { ls } from "../service/ls";
import { globalState } from "../service/global.state";

export class FomComponent extends LitElement {
  static styles = css` 
  :host{
    display:flex;
    justify-content:center;
    width:100%;
  }
    form {
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      width: 100%;
      max-width: 300px;
      color:white;
      padding: 2rem;
      background-color: #86061f9e;
      border-radius: 8px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      input {
        height: 25px;
        border: none;
        border-radius: 8px;
        padding-left: 10px;
      }
      button {
        height: 25px;
        border: none;
        border-radius: 8px;
        background-color: #04052d99;
        color: white;
        margin-top: 20px;
      }
    }
  `;

  username: string;
  disabled: boolean;

  constructor() {
    super();
    this.username = "";
    this.disabled = true;
  }

  handlerChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    if (target && target instanceof HTMLInputElement) {
      this.username = target.value;
    }
    ls(this.username);
    globalState.setUser(this.username);
    this.disabled = false;
  }

  render() {
    return html`
      <form>
        <label>Crea un nuevo usuario</label>
        <input type="text" name="user" @change=${this.handlerChange} placeholder="Agrega un usuario"/>
        <button @click=${() => Router.go("/game")} ?disabled=${!this.disabled}>Crear</button>
      </form>
    `;
  }
}

customElements.define("form-component", FomComponent);
