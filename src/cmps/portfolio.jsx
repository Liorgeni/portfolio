import sweeper from "../assets/img/mines-sweeper.png";
import appsus from "../assets/img/appsus.png";
import gigxerr from "../assets/img/gigxerr.png";
import touchnums from "../assets/img/touchnums.png";
import pacman from "../assets/img/pacman.png";
import memegen from "../assets/img/memegen.png";
import mario from "../assets/img/superMario.png";
import github from "../assets/img/icon-github.svg";

export function Portfolio() {
  return (
    <section className="portfolio main-layout full">
      <div className="portfolio-header flex">
        <h1>Portfolio</h1>
        <a href=" https://github.com/Liorgeni/" target="_blank">
          <img src={github} />
        </a>
      </div>

      <section className="portfolio-grid">
        <article className="demo-card">
          <img className="portfolio-img" src={gigxerr} alt="gigxerr" />
          <div className="card-text flex column">
            <div>
              <h2>Gigxerr</h2>
              <h3>Tech: React, JS, NodeJs, MongoDB, SCSS, Express.js</h3>
            </div>

            <div className="card-links">
              <a href="https://gigxerr.onrender.com" target="_blank">
                <button>Open</button>
              </a>
              <a
                href="https://github.com/ShaulGabrieli/sprint4/"
                target="_blank"
              >
                <button>Git</button>
              </a>
            </div>
            <h4>Created: February 2023</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={mario} alt="gigxerr" />
          <div className="card-text flex column">
            <div>
              <h2>Super Mario</h2>
              <h3>Tech: JS, Canvas, OOP</h3>
            </div>

            <div className="card-links">
              <a href="https://liorgeni.github.io/super-mario" target="_blank">
                <button>Open</button>
              </a>
              <a
                href="https://github.com/Liorgeni/super-mario/"
                target="_blank"
              >
                <button>Git</button>
              </a>
            </div>
            <h4>Status: In progress (April 2023)</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={appsus} alt="gigxerr" />
          <div className="card-text flex column">
            <h2>Appsus</h2>
            <h3>Tech: React, Js, CSS</h3>
            <div className="card-links">
              <a href="https://liorgeni.github.io/Appsus/" target="_blank">
                <button>Open</button>
              </a>
              <a href="https://github.com/Liorgeni/Appsus" target="_blank">
                <button>Git</button>
              </a>
            </div>
            <h4>Created: January 2023</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={memegen} alt="gigxerr" />
          <div className="card-text flex column">
            <h2>The Memes Generator</h2>
            <h3>Tech: JS, Canvas</h3>
            <div className="card-links">
              <a
                href="https://liorgeni.github.io/The-mems-generator/"
                target="_blank"
              >
                <button>Open</button>
              </a>
              <a
                href="https://github.com/Liorgeni/The-mems-generator"
                target="_blank"
              >
                <button>Git</button>
              </a>
            </div>
            <h4>Created: December 2022</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={sweeper} alt="gigxerr" />
          <div className="card-text flex column">
            <h2>Mine's Sweeper!</h2>
            <h3>Tech: JS, Matrix, CSS</h3>
            <div className="card-links">
              <a href="https://liorgeni.github.io/mineSweeper/" target="_blank">
                <button>Open</button>
              </a>
              <a href="https://github.com/Liorgeni/mineSweeper" target="_blank">
                <button>Git</button>
              </a>
            </div>
            <h4>Created: December 2022</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={pacman} alt="gigxerr" />
          <div className="card-text flex column">
            <h2>PAC-MAN</h2>
            <h3>Tech: JS, Matrix</h3>
            <div className="card-links">
              <a href="https://liorgeni.github.io/PacMan/" target="_blank">
                <button>Open</button>
              </a>
              <a href="https://github.com/Liorgeni/PacMan" target="_blank">
                <button>Git</button>
              </a>
            </div>
            <h4>Created: November 2022</h4>
          </div>
        </article>

        <article className="demo-card">
          <img className="portfolio-img" src={touchnums} alt="gigxerr" />
          <div className="card-text flex column">
            <h2>Touch The Numbers!</h2>
            <h3>Tech: JS, CSS</h3>
            <div className="card-links">
              <a href="https://liorgeni.github.io/touchNums/" target="_blank">
                <button>Open</button>
              </a>
              <a href="https://github.com/Liorgeni/touchNums" target="_blank">
                <button>Git</button>
              </a>
            </div>
            <h4>Created: November 2022</h4>
          </div>
        </article>
      </section>
    </section>
  );
}
