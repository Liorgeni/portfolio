import { Intro } from "../cmps/intro.jsx";
import { CV } from "../cmps/cv.jsx";
import { Portfolio } from "../cmps/portfolio.jsx";
import { About } from "../cmps/about.jsx";

export function HomePage() {
  return (
    <section className="home-page main-layout full">
      <Intro />
      <Portfolio />
      <CV />
      <About />
    </section>
  );
}
