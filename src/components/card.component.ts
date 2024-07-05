import { Router } from "@vaadin/router";
import { LitElement, css, html } from "lit";
import { globalState } from "../service/global.state";

export class CardComponent extends LitElement {
  static styles = css`
  section{
    display: flex;
      column-gap: 1rem;
      justify-content: space-around;
      color: #064d5fea;
      font-size: 1.2rem;
      margin: 1rem;
        button {
        width: 50px;
        height: 30px;
        border-radius: 8px;
        border: none;
        background-color: #064d5fea;
        color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
  }`;
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
