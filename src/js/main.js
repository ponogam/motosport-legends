import "../styles/main.scss";
import { runHeroIntro } from "./animations/heroIntro.js";
import { initCardsReveal } from "./animations/cardsReveal.js";

runHeroIntro();

initCardsReveal({
    selector: ".card",
    stagger: 200,
    threshold: 0.15,
    rootMargin: "0px 0px -15% 0px",
    once: true,
});
