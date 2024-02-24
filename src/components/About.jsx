import "../styles/about.css";

export default function About() {
  return (
    <div className="about-me">
      <div className="about-header">About Me</div>
      <article>
        <div className="profile-image-wrapper">
          <img src="../src/assets/asta.jpg"></img>
        </div>
        <div className="profile-description">
          <div className="description-header">
            I'm Yelish Giri, a Full-Stack Developer{" "}
          </div>
          <div className="description-text">
            Hey there, I'm Yelish Giri, a dedicated full-stack developer
            currently honing my skills at the University of Southern
            Mississippi. My tech toolbox includes Node, Express, Webpack, Vite,
            and React. Delve into my portfolio to discover how I transform
            concepts into compelling digital experiences. Passionate about
            merging technology and creativity, I'm on a constant quest for
            innovation in the digital realm. Join me on this journey of turning
            ideas into impactful solutions.
          </div>
          <div className="descrption-info">
            <div className="info-points">
              <li>Name: Yelish(Rabindra) Giri</li>
              <li>Email: yelish.giri1@gmail.com</li>
            </div>
            <div className="info-points">
              <li>Age: 19</li>
              <li>From:Hattieburg,Mississippi</li>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
