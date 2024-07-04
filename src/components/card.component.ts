import { LitElement, css, html } from "lit";

export class CardComponent extends LitElement {
  static styles = css``;
    puntosUser: number;

  static get properties() {
    return {
      puntosUser: { type: Number },
    };
  }

  constructor() {
    super();
    this.puntosUser = 0;
  }

  render() {
    return html`
      <section>
        <div>
          <p>Nombre: <small>Vianam</small></p>
          <p>Puntos: <small>${this.puntosUser}</small></p>
        </div>
        <button>Salir</button>
      </section>
    `;
  }
}

customElements.define("card-component", CardComponent);
