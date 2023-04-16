// import { useEffect } from "react";
// export function AppHeader({ toggleMenu }) {
//   // useEffect(() => {
//   //   const header = document.querySelector("app-header");
//   //   const nav = document.querySelector("main-nav");

//   //   const headerOberver = new IntersectionObserver(onHeaderObserver, {
//   //     rootMargin: "-91px 0px 0px",
//   //   });

//   //   headerOberver.observe(header);

//   //   function onHeaderObserver(entries) {
//   //     entries.forEach((entry) => {
//   //       nav.style.position = entry.isIntersecting ? "static" : "fixed";
//   //     });
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   function handleScroll() {
//   //     console.log(window.scrollY);
//   //   }
//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => {
//   //     window.removeEventListener("scroll", handleScroll);
//   //   };
//   // }, []);

//   function scrollToSection(section) {
//     let scrollOffsetY;
//     switch (section) {
//       case "header":
//         scrollOffsetY = 0;
//         break;
//       case "portfolio":
//         scrollOffsetY = 900;
//         break;
//       case "cv":
//         scrollOffsetY = 2400;
//         break;
//       case "about":
//         scrollOffsetY = 3950;
//         break;
//       case "bottom":
//         scrollOffsetY = 5000;
//         break;
//     }

//     window.scrollTo({
//       top: scrollOffsetY,
//       behavior: "smooth",
//     });
//   }

//   return (
//     <header className="app-header main-layout full">
//       <nav className="main-nav flex align-center">
//         <section className="left-header flex ">
//           <div className="app-logo flex">
//             <h1 onClick={() => scrollToSection("header")}>Lior Geni</h1>
//           </div>
//           <ul className="header-links flex clean-list">
//             <li>
//               <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("cv")}>CV</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("about")}>About</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("bottom")}>Contact me</a>
//             </li>
//           </ul>
//           {/* <ul className="header-links flex clean-list">
//             <li>
//               <a onClick={() => scrollToSection("portfolio")}>Portfolio</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("cv")}>CV</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("about")}>About</a>
//             </li>
//             <li>
//               <a onClick={() => scrollToSection("bottom")}>Contact me</a>
//             </li>
//           </ul> */}
//           <button className="menu-toggle-btn" onClick={toggleMenu}>
//             ☰
//           </button>
//         </section>
//       </nav>
//     </header>
//   );
// }
