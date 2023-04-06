import { HomePage } from "./pages/home-page.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { AppFooter } from "./cmps/app-footer.jsx";

export function RootCmp() {
  function toggleMenu() {
    document.body.classList.toggle("menu-open");
  }
  return (
    <section className="main-layout">
      <div className="main-screen full" onClick={toggleMenu}></div>
      <AppHeader toggleMenu={toggleMenu} />
      <HomePage />
      <AppFooter />
    </section>
  );
}
