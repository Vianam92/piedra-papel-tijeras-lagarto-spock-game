import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
import { globalState } from "../service/global.state";

export class CardComponent extends LitElement {
  static styles = css``;
  puntosUser: number;
  username: string | undefined;

  static get properties() {
    return {
      puntosUser: { type: Number },
      UserData: {type: Object}
    };
  }

  constructor() {
    super();
    this.puntosUser = 0;
    this.username = globalState.getUser();
  }

  saveAndGoBack(){
    Router.go("/");
  }

  render() {
    return html`
      <section>
        <div>
          <p>Nombre: <small>${this.username}</small></p>
          <p>Puntos: <small>${this.puntosUser}</small></p>
        </div>
        <button @click=${() => Router.go("/")}>Salir</button>
      </section>
    `;
  }
}

customElements.define("card-component", CardComponent);
