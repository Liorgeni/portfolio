import { useRef, useEffect } from "react";
import Typed from "typed.js";
import profile from "../assets/img/profile.jpeg";

export function Intro() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `<h2>A</h2> <h2>FullStack</h2><h2 className="flex">
      <span>Developer</span>
    </h2>`,
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section className="intro-container main-layout full">
      <div className="flex">
        <div className="intro flex space-between">
          <div
            className="intro-headline flex column space-between "
            ref={el}
          ></div>
          <div className="intro-content flex column space-between">
            <div className="profile-img flex">
              <img src={profile} alt="profile-img" />
            </div>
            <div className="intro-text">
              <p>
                32 years old from Tel-Aviv. I keep evolving every day. My dream
                is to change the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
