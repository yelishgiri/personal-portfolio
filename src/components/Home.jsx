import { Typewriter } from "react-simple-typewriter";
import Navbar from "./Navbar.jsx";
import clip from "../assets/clip-original.mp4";
import "../styles/home.css";

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
            <Typewriter
              words={[
                "I am a Front End Developer",
                "I am a Back End Developer",
                "I am a Full Stack Developer",
              ]}
              loop={0}
              cursor={true}
            />
          </div>
          <div id="socials">
            <div>
              <img src="../src/assets/github.svg" width="40px" height="40px" />
            </div>
            <div>
              <img
                src="../src/assets/linkedin.svg"
                width="40px"
                height="40px"
              />
            </div>
            <div>
              <img src="../src/assets/post.svg" width="40px" height="40px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
