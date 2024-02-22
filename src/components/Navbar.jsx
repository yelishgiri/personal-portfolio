import "../styles/navbar.css";

export default function Navbar() {
  function onClickBtn() {}
  return (
    <>
      <div className="nav-bar">
        <div className="main-logo">
          <img src="../src/assets/hikigaya.png" width="50px" height="50px" />
        </div>
        <div id="option-bar">
          <button>About</button>
          <button>Resume</button>
          <button>Portfolio</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
      </div>
    </>
  );
}
