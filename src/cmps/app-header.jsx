export function AppHeader({ toggleMenu }) {
  function scrollToSection(section) {
    let scrollOffsetY;
    switch (section) {
      case "header":
        scrollOffsetY = 0;
        break;
      case "portfolio":
        scrollOffsetY = 840;
        break;
      case "cv":
        scrollOffsetY = 2500;
        break;
      case "bottom":
        scrollOffsetY = 5000;
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
              <a onClick={() => scrollToSection("bottom")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("bottom")}>Contact me</a>
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
