import "../styles/about.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { IconContext } from "react-icons";
import { SiWebpack } from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import { IoLogoNpm } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiBabel } from "react-icons/si";

export default function About() {
  return (
    <div className="wrapper-about">
      <div className="about-me">
        <div className="about-header">About Me</div>
        <div className="animated-bar"></div>
        <article>
          <div className="profile-image-wrapper">
            <img src="../src/assets/asta.jpg" width={600} height={600}></img>
          </div>
          <div className="profile">
            <div className="description-header">
              I'm Yelish Giri, a Full-Stack Developer{" "}
            </div>
            <div className="description-text">
              Hey there, I'm Yelish Giri, a dedicated full-stack developer
              currently honing my skills at the University of Southern
              Mississippi. My tech toolbox includes Node, Express, Webpack,
              Vite, and React. Delve into my portfolio to discover how I
              transform concepts into compelling digital experiences. Passionate
              about merging technology and creativity, I'm on a constant quest
              for innovation in the digital realm. Join me on this journey of
              turning ideas into impactful solutions.
            </div>
            <div className="descrption-info">
              <div className="info-points">
                <li>Name: Yelish (Rabindra) Giri</li>
                <li>Age: 19</li>
              </div>
              <div className="info-points">
                <li>Email: yelish.giri1@gmail.com</li>
                <li>From: Hattieburg,Mississippi</li>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="skills">
        <IconContext.Provider value={{ size: "10em" }}>
          <div className="skills-technologies">
            <div className="technologies-header">Technologies</div>
            <Carousel>
              <div>
                <IoLogoNpm />
                <FaGitAlt />
                <FaGithub />
              </div>
              <SiWebpack />
              <SiBabel />
            </Carousel>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
