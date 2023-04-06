import reactIcon from "../assets/img/react-icon.png";
import mongoIcon from "../assets/img/mongodb-icon.png";
import nodeIcon from "../assets/img/node-icon.png";

export function CV() {
  return (
    <section className="CV full main-layout">
      <section className="CV-content">
        <div className="CV-header-content   space between">
          <div className="CV-headline flex grow">
            <h1>CV.</h1>
            <div className="rectangle flex"></div>
          </div>
          {/* <div className="skills flex align-center">
            <h2>Skills:</h2>
            <span className="material-symbols-outlined">html</span>
            <span className="material-symbols-outlined">css</span>
            <span className="material-symbols-outlined">javascript</span>
            <img src={reactIcon} alt="reactIcon" />
            <img src={mongoIcon} alt="mongoIcon" />
            <img src={nodeIcon} alt="nodeIcon" />
          </div> */}
        </div>

        <section className="CV-grid ">
          <article className="CV-item flex align-center">
            <div className="CV-icon">
              <span className="material-symbols-outlined">apartment</span>
            </div>
            <div className="CV-paragraph">
              <h4>General Info</h4>
              <p>Born 1991 in Tel-Aviv-Yafo, Israel</p>
              <p>+972 58 488 5050</p>
              <p>liorgeni@gmail.com</p>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className="CV-icon">
              <span className="material-symbols-outlined">person_play</span>
            </div>
            <div className="CV-paragraph">
              <h4>Technical skills</h4>
              <p>
                <b>Skills</b>{" "}
              </p>
              <li>
                JavaScript, TypeScript, React.js, Node.js Express.js, Redux.js,
                Vue, Angular, Socket.IO, OOP
              </li>
              <p>
                <b>Databases</b>
              </p>
              <li> SQL (PostgreSQL), NoSQL (MongoDB)</li>
              <p>
                <b>Front-end technologies</b>
              </p>
              <li>CSS, SCSS ,Canvas, Three.js</li>
              <p>
                <b>Tools</b>
              </p>
              <li>Git, Trello</li>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div className="CV-paragraph">
              <h4>Education</h4>
              <p>
                <b>Full-stack Bootcamp</b>
              </p>
              <p>Institution: Coding Academy</p>
              <p>
                <i> Year of Graduation: 2023</i>
              </p>
              <p>
                <b> B.A Film and Television</b>
              </p>
              <p>Institution: Tel-Aviv University Year</p>
              <p>
                <i>Year of Graduation: 2021</i>
              </p>
              <li>Majoring: Scriptwriting</li>
              <p>
                <b>Music College</b>
              </p>
              <p>Institution: "Muzik"</p>
              <p>
                <i>Year of Graduation: 2017</i>
              </p>
              <li>Majoring: Songwriting and composing</li>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">badge</span>
            </div>
            <div className="CV-paragraph">
              <h4>Employment History</h4>
              <p>
                Manager (January 2012 — present)
                <small>
                  Over the years and through university, I worked in various
                  roles among them: Deputy Manager at NIKE store, and bar
                  manager at "The Diner". (Got certificate of excellence in both
                  of them)
                </small>
              </p>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">language</span>
            </div>
            <div className="CV-paragraph">
              <h4>Language</h4>
              <p>Hebrew - Mother tongue</p>
              <p> English - Fluent</p>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div className="CV-paragraph">
              <h4>Enrichment courses</h4>
              <p>Copywriting</p>
              <p>SEO</p>
              <p>Product management</p>
              <p>WordPress</p>
            </div>
          </article>
          <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div className="CV-paragraph">
              <h4>Military Service</h4>
              <p>Armored corps (2009-2012)</p>
            </div>
          </article>

          {/* <article className="CV-item flex align-center">
            <div className=" CV-icon">
              <span className="material-symbols-outlined">
                stadia_controller
              </span>
            </div>
            <div className="CV-paragraph">
              <h4>Hobbies</h4>
              <p>Guitar and piano playing</p>
              <p>Book reading</p>
              <p>Video games</p>
              <p>Cooking</p>
            </div>
          </article> */}
        </section>
      </section>
    </section>
  );
}
