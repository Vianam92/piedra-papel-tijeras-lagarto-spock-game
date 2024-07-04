import "../components/form.component";
import { LitElement, html, css } from "lit";

export class HomeGame extends LitElement {
  static styles = css`
    header {
      font-size: 2rem;
      padding: 1rem;
      color: #254258;
    }
    main {
      display: flex;
      justify-content: center;
      padding-top: 100px;
    }
  `;

  render() {
    return html`
      <header>Juego Piedra Papel Tijera</header>
      <main>
        <form-component></form-component>
      </main>
    `;
  }
}

customElements.define("home-page", HomeGame);
