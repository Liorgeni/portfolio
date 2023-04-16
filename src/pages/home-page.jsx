import { Intro } from "../cmps/intro.jsx";
import { CV } from "../cmps/cv.jsx";
import { Portfolio } from "../cmps/portfolio.jsx";
import { About } from "../cmps/about.jsx";

export function HomePage({ scrollToSection2, portfoloioRef, cvRef, abourRef }) {
  return (
    <section className="home-page main-layout full">
      <Intro />
      <Portfolio ref={portfoloioRef} />
      <CV />
      <About />
    </section>
  );
}
