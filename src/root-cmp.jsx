import { HomePage } from "./pages/home-page.jsx";
import { AppHeader } from "./cmps/app-header.jsx";
import { AppFooter } from "./cmps/app-footer.jsx";

export function RootCmp() {
  return (
    <section className="main-layout">
      <AppHeader />
      <HomePage />
      <AppFooter />
    </section>
  );
}
