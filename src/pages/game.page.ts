import { LitElement, css, html } from "lit";
import piedra from "../assets/piedras.png";
import papel from "../assets/papel-arrugado.png";
import tijeras from "../assets/tijeras.png";
import "../components/card.component";
import { getRandomChoice } from "../usecases/usecases";

export class GamePage extends LitElement {
  static styles = css`
    article {
      padding-top: 100px;
      justify-content: center;
      display: flex;
      column-gap: 1rem;
      img {
        width: 80px;
        height: 80px;
      }
    }
  `;
  userSelection: number | null;
  robotSelection: number | null;
  puntosUser: number;
  puntosRobot: number;
  message: string;

  static get properties() {
    return {
      userSelection: { type: Number },
      robotSelection: { type: Number },
      message: { type: String },
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
  }

  constructor() {
    super();
    this.userSelection = null;
    this.robotSelection = null;
    this.puntosUser = 0;
    this.puntosRobot = 0;
    this.message = "";
  }

  selectionRobot() {
    this.robotSelection = getRandomChoice();
  }

  paintMessage(message: string) {
    this.message = message;
    setTimeout(() => {
      this.message = "";
    }, 1000);
  }

  gameSelection(num: number) {
    setTimeout(() => this.selectionRobot(), 1000);
    setTimeout(() => {
      if (num === 0 && this.robotSelection === 2) {
        this.puntosUser += 1;
        this.paintMessage("Has Ganado");
      } else if (num === 2 && this.robotSelection === 1) {
        this.puntosUser += 1;
        this.paintMessage(`Ha Ganado `);
      } else if (num === 1 && this.robotSelection === 0) {
        this.puntosUser += 1;
        this.paintMessage(`Ha Ganado `);
      } else if (this.robotSelection === 0 && num === 2) {
        this.puntosRobot += 1;
        this.paintMessage(`Ha Ganado el robot`);
      } else if (this.robotSelection === 2 && num === 1) {
        this.puntosRobot += 1;
        this.paintMessage(`Ha Ganado el robot`);
      } else if (this.robotSelection === 1 && num === 0) {
        this.puntosRobot += 1;
        this.paintMessage(`Ha Ganado el robot`);
      } else {
        this.paintMessage(`Empate`);
      }
    }, 1002);
  }

  render() {
    return html`
      <card-component .puntosUser=${this.puntosUser}></card-component>
      <article>
        <img
          src=${piedra}
          title="piedra"
          alt="piedra"
          @click=${() => this.gameSelection(0)}
        />
        <img
          src=${papel}
          title="papel"
          alt="papel"
          @click=${() => this.gameSelection(1)}
        />
        <img
          src=${tijeras}
          title="tijeras"
          alt="tijeras"
          @click=${() => this.gameSelection(2)}
        />
      </article>
      <p>${this.message}</p>
    `;
  }
}

customElements.define("game-page", GamePage);
