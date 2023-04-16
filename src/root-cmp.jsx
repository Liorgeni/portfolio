import { AppHeader } from "./cmps/app-header.jsx";
import { Intro } from "./cmps/intro.jsx";
import { CV } from "./cmps/cv.jsx";
import { Portfolio } from "./cmps/portfolio.jsx";
import { About } from "./cmps/about.jsx";
import { AppFooter } from "./cmps/app-footer.jsx";

export function RootCmp() {
  function toggleMenu() {
    document.body.classList.toggle("menu-open");
  }
  return (
    <section className="main-layout">
      <div className="main-screen full" onClick={toggleMenu}></div>
      <AppHeader toggleMenu={toggleMenu} />
      <Intro />
      <Portfolio />
      <CV />
      <About />
      <AppFooter />
    </section>
  );
}

{
  /* <HomePage
        scrollToSection2={scrollToSection2}
        portfoloioRef={portfoloioRef}
        cvRef={cvRef}
        abourRef={abourRef}
      /> */
}
// import { HomePage } from "./pages/home-page.jsx";
