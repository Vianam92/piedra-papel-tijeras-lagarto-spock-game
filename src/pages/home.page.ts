import "../components/form.component";
import { LitElement, html, css } from "lit";
import imageGame from "../assets/pngegg.png";

export class HomeGame extends LitElement {
  static styles = css`
    header {
      font-size: 2rem;
      padding: 1rem;
      color: #254258;
      width:100%;
      text-align:center;
      img{
        width:450px;
      }
    }
    main {
      display: flex;
      justify-content: center;
      padding-top: 100px;
    }
  `;

  render() {
    return html`
      <header><img src=${imageGame} alt="Juego Piedra Papel Tijera Lagarto Spock"/></header>
      <main>
        <form-component></form-component>
      </main>
    `;
  }
}

customElements.define("home-page", HomeGame);
