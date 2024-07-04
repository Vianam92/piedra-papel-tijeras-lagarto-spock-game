import { Router } from "@vaadin/router";
import "./pages/home.page";
import "./pages/game.page";

const app = document.querySelector("#app");

const router = new Router(app);

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/game", component: "game-page" },
  { path: "(.*)", redirect: "/" },
]);
