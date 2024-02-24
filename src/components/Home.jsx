import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar.jsx";
import clip from "../assets/clip-original.mp4";
import "../styles/home.css";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { MdOutlineNewspaper } from "react-icons/md";
import { IconContext } from "react-icons";

export default function Home() {
  return (
    <>
      <div className="video-container">
        <video className="video-tag" autoPlay loop muted>
          <source src={clip} type="video/mp4" />
        </video>
        <div className="wrapper-div">
          <Navbar />
          <div id="home-main-body">
            <div id="developer-name">Yelish Giri</div>
            <div id="developer-moving-text">
              I am a
              <Typewriter
                words={[
                  " Front End Developer ",
                  " Back End Developer ",
                  " Full Stack Developer ",
                ]}
                loop={0}
                cursor={true}
              />
            </div>
          </div>
          <div id="socials">
            <IconContext.Provider value={{ size: "4em" }}>
              <a href="https://github.com/yelishgiri">
                <IoLogoGithub />
              </a>
              <a href="https://linkedin.com/in/rabindra-giri-05125b242">
                <IoLogoLinkedin />
              </a>
              <a href="#blog">
                <MdOutlineNewspaper />
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}
