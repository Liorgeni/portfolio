// import brazil from "../assets/img/brazil-image.jpg";
// import stage from "../assets/img/stage-image.jpg";
// import pitch from "../assets/img/stage2-image.JPG";
// import cookies from "../assets/img/cookies-image.jpeg";
import lulu from "../assets/img/lulu-image.jpg";

export function About() {
  return (
    <section className="about main-layout full">
      <div className="about-content flex column space-between align-center">
        <h2>A liitle more About me</h2>
        <p>
          Hi! My name is Lior, and I'm inlove with coding. I recently graduated
          from a Coding Academy Bootcamp where I gained experience developing
          E2E applications. Now, I'm looking for a dynamic and challenging
          environment where I can contribute my skills and passion. I believe
          that my work ethic is indisputable, and I consistently strive to give
          100% effort in everything I do. I'm highly motivated and reliable, and
          I'm confident that I'll make a positive impact and contribute to the
          success of any team.
          <br />
          <br />
          Aside from coding, I have a background in music and cinema. I studied
          music professionally and continue to record my original songs in my
          spare time. I also pursued academic studies in cinema at Tel Aviv
          University, where I was accepted into the screenwriting major. For my
          final project, I wrote a full-length 75-minute drama-comedy feature
          about a girl who tries to fulfill her mother's last request.
          <br />
          {/* <img className="asd" src={stage} />
          <img className="asd" src={pitch} /> */}
          <br />
          Through the last 10 years I've also taken several major journeys
          around the world, which have had a huge impact on my personality. In
          my free time, you'll likely find me playing the guitar or piano,
          reading books about the essence of life, practicing Muay Thai, playing
          video games, or baking cakes. Ultimately, my goal is to enter the
          industry, develop a career, and positively impact the world with my
          skills and passion for coding.
          <br />
          {/* <img className="asd" src={brazil} />
          <img className="asd" src={cookies} /> */}
          <br />
          Also, father to lulu:
          <br />
          <br />
          <img className="asd" src={lulu} />
        </p>
      </div>
    </section>
  );
}
