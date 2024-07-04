import { Router } from "@vaadin/router";
import { LitElement, html, css } from "lit";

export class FomComponent extends LitElement {
static styles = css`
form{
    display:flex;
    flex-direction:column;
    row-gap:0.5rem;
    width:100%;
    max-width:350px;
    padding:2rem;
    background-color:#25458458;
    border-radius:8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    input{
        height:25px;
        border:none;
        border-radius:8px;
        padding-left:10px;
    }
    button{
        height:25px;
        border:none;
        border-radius:8px;
        background-color: #04052d99;
        color:white;
        margin-top:20px;
    }
}
`

  render() {
    return html`
        <form>
          <label>Crea un nuevo usuario</label>
          <input type="text" name="user" />
          <button @click=${() => Router.go("/game")}>Crear</button>
        </form>
    `;
  }
}

customElements.define("form-component", FomComponent);
