import { LitElement, css, html } from "lit";
import piedra from "../assets/piedras.png";
import papel from "../assets/papel-arrugado.png";
import tijeras from "../assets/tijeras.png";
import lagarto from "../assets/lagarto.png";
import spock from "../assets/spock.png";
import "../components/card.component";
import { getRandomChoice } from "../usecases/usecases";
import { UserData, globalState } from "../service/global.state";

export class GamePage extends LitElement {
  static styles = css`
    div {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 2rem;
    }
    .message {
      text-align: center;
    }
    article {
      width: 100%;
      max-width: 650px;
      padding-top: 100px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      column-gap: 2rem;
      img {
        width: 80px;
        height: 80px;
      }
      .img1 {
        grid-column-start: 1;
      }
      .img2 {
        grid-column-start: 2;
        grid-row-start: 2;
        grid-row-end: 5;
      }
      .img3 {
        grid-column-start: 3;
        grid-row-start: 3;
        grid-row-end: 5;
      }
      .img4 {
        grid-column-start: 3;
        grid-row-start: 3;
        grid-row-end: 1;
      }
      .img5 {
        grid-column-start: 1;
        grid-row-start: 3;
        grid-row-end: 5;
      }
    }
    p {
      margin: 0;
      padding: 0;
    }
  `;

  robotSelection: number | null;
  puntosUser: number;
  puntosRobot: number;
  message: string;
  userData: UserData[];
  user: UserData | undefined;

  static get properties() {
    return {
      robotSelection: { type: Number },
      message: { type: String },
    };
  }

  connectedCallback(): void {
    super.connectedCallback();

    let userName = globalState.getUser();

    const userExist = globalState
      .getUserData()
      .some((user) => user.username === userName);

    if (!userExist) {
      globalState.setUserData([
        {
          username: userName,
          score: 0,
        },
      ]);
    }

    this.user = globalState.getUserData().find((x) => x.username === userName);

    if (this.user) {
      this.puntosUser = this.user.score ?? 0;
    }
  }

  constructor() {
    super();
    this.robotSelection = null;
    this.puntosUser = 0;
    this.puntosRobot = 0;
    this.message = "Selecciona una jugada";
    this.userData = globalState.getUserData();
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
        this.paintMessage("Has Ganado");
      } else if (num === 1 && this.robotSelection === 0) {
        this.puntosUser += 1;
        this.paintMessage("Has Ganado");
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

      if (this.user) {
        this.user.score = this.puntosUser;
        globalState.setUserData([this.user]);
        console.log(this.puntosUser);
      }
    }, 1002);
  }

  render() {
    return html`
      <card-component .puntosUser=${this.puntosUser}></card-component>
      <p class="message">${this.message}</p>
      <div>
        <article>
          <img
            src=${piedra}
            class="img1"
            title="piedra"
            alt="piedra"
            @click=${() => this.gameSelection(0)}
          />
          <img
            src=${papel}
            class="img2"
            title="papel"
            alt="papel"
            @click=${() => this.gameSelection(1)}
          />
          <img
            src=${tijeras}
            class="img3"
            title="tijeras"
            alt="tijeras"
            @click=${() => this.gameSelection(2)}
          />
          <img
            src=${lagarto}
            class="img4"
            title="lagarto"
            alt="lagarto"
            @click=${() => this.gameSelection(3)}
          />
          <img
            src=${spock}
            class="img5"
            title="spock"
            alt="spock"
            @click=${() => this.gameSelection(4)}
          />
        </article>
      </div>
    `;
  }
}

customElements.define("game-page", GamePage);
