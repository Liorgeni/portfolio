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
        <a href="https://gigxerr.onrender.com/?title=&tags=" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="portfolio-img" src={gigxerr} alt="gigxerr" />
                </div>
                <div className="flip-card-back">
                  <h2>Gigxerr</h2>
                  <h3>Tags: React, JS, NodeJs, MongoDB</h3>
                  <p>Category: Business</p>
                  <p>
                    Summary: Developed an end-to-end (E2E) application, similar
                    to "Fiverr", using React and Node.js. The objective was to
                    create a platform that connects freelancers with clients
                    seeking specific services.
                  </p>
                  <p>Created: February 2023</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a href=" https://liorgeni.github.io/super-mario/" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="portfolio-img"
                    src={mario}
                    alt="super mario"
                  />
                </div>
                <div className="flip-card-back">
                  <h2>Super Mario</h2>
                  <h3>Tags: JS, Canvas</h3>
                  <p>Category: Games</p>
                  <p>
                    Summary: Developed a Super Mario game using JavaScript and
                    Canvas. The objective was to create an entertaining and
                    engaging game that inspired by the original Super Mario game
                    while leveraging the capabilities of the modern web.
                  </p>
                  <p>Created: March 2023(In progress)</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a href="https://liorgeni.github.io/Appsus/" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="portfolio-img" src={appsus} alt="appsus" />
                </div>
                <div className="flip-card-back">
                  <h2>Appsus</h2>
                  <h3>Tags: React, JS</h3>
                  <p>Category: Productive</p>
                  <p>
                    Summary: Developed a web application called Appsus that
                    combines the functionalities of Gmail and Google Keep. My
                    role was to create an intuitive and user-friendly
                    application that allows users to write notes, edit them,and
                    add location or video.
                  </p>
                  <p>Created: January 2023</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a
          href="https://liorgeni.github.io/The-mems-generator/"
          target="_blank"
        >
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="portfolio-img" src={memegen} alt="memegen" />
                </div>
                <div className="flip-card-back">
                  <h2>Memes Generator</h2>
                  <h3>Tags: JS, Canvas</h3>
                  <p>Category: Entertainment</p>
                  <p>
                    Summary: Developed a web application called "Memes
                    generator" that allows users to create and customize their
                    memes. The objective was to create an easy-to-use and
                    intuitive application that leverages the capabilities of
                    JavaScript and the Canvas element.
                  </p>
                  <p>Created: December 2022</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a href="https://liorgeni.github.io/mineSweeper/" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="portfolio-img" src={sweeper} alt="sweeper" />
                </div>
                <div className="flip-card-back">
                  <h2>Mine's Sweeper!</h2>
                  <h3>Tags: JS, Matrix</h3>
                  <p>Category: Games</p>
                  <p>
                    Summary: Developed a functional Minesweeper game using
                    JavaScript in just two days. The objective was to create an
                    engaging game that challenges players' problem-solving
                    skills while familiarizing myself with the intricacies of
                    JavaScript.
                  </p>
                  <p>Created: December 2022</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a href="https://liorgeni.github.io/PacMan/" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img className="portfolio-img" src={pacman} alt="pacman" />
                </div>
                <div className="flip-card-back">
                  <h2>PACMAN</h2>
                  <h3>Tags: JS, Matrix</h3>
                  <p>Category: Games</p>
                  <p>
                    Summary: Developed a classic Pacman game using pure
                    JavaScript and the Matrix effect. The objective was to
                    create a retro-style game that inspired by the original.
                  </p>
                  <p>Created: November 2022</p>
                </div>
              </div>
            </div>
          </article>
        </a>
        <a href=" https://liorgeni.github.io/touchNums/" target="_blank">
          <article className="portfolio-item flex column">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="portfolio-img"
                    src={touchnums}
                    alt="touchnums"
                  />
                </div>
                <div className="flip-card-back">
                  <h2>Touch The Numbers!</h2>
                  <h3>Tags: JS, Matrix</h3>
                  <p>Category: Games</p>
                  <p>
                    Summary: Developed a web application called Touch the
                    Numbers, where players select numbers in the correct order.
                    The objective was to create a simple yet engaging game that
                    introduces players to the Matrix effect and allows them to
                    customize the difficulty level.
                  </p>
                  <p>Created: November 2022</p>
                </div>
              </div>
            </div>
          </article>
        </a>
      </section>
    </section>
  );
}

// My final project as part of my studies at
//                     Coding-Academy Bootcamp. In this project we chose the
//                     successful "fiverr" brand as refrence to build a freelance
//                     business marketplace, where you can purchase service or post
//                     your own offer. The unique innovation that we manage to
//                     achieve, is that the user may see statistical options that
//                     will help him track his data in real time. such as: chart of
//                     order status or even income, thanks to gigxerr mediation.
