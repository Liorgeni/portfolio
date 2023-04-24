import { useEffect } from "react";
export function AppHeader({ toggleMenu }) {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToSection(section) {
    let scrollOffsetY;
    const screenWidth = window.innerWidth;

    switch (section) {
      case "header":
        scrollOffsetY = 0;
        break;
      case "portfolio":
        scrollOffsetY = screenWidth < 500 ? 750 : 870;
        break;
      case "cv":
        scrollOffsetY = screenWidth < 500 ? 3160 : 2350;
        break;
      case "about":
        scrollOffsetY = screenWidth < 500 ? 5900 : 4000;
        break;
      case "bottom":
        scrollOffsetY = 10000;
        break;
    }

    window.scrollTo({
      top: scrollOffsetY,
      behavior: "smooth",
    });
  }

  return (
    <header className="app-header main-layout full">
      <nav className="main-nav flex align-center">
        <section className="left-header flex ">
          <div className="app-logo flex">
            <h1 onClick={() => scrollToSection("header")}>Lior Geni</h1>
          </div>
          <ul className="header-links flex clean-list">
            <li>
              <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("cv")}>CV</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("bottom")}>Contact</a>
            </li>
          </ul>
          <button className="menu-toggle-btn" onClick={toggleMenu}>
            ☰
          </button>
        </section>
      </nav>
    </header>
  );
}
