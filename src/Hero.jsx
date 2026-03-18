import myImage from "/assets/me.jpg";

export default function Hero({ onToggleApps, isShowing }) {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>
          Good day, <span className="pink">again!</span>
        </h1>
          <p>
            I've{" "}
            <span className="pink">unleashed the nerd </span>
            and started learning front end development skills. This site
            documents my journey--learning, experimenting, and discovering.
          </p>
          {/* 5. Add the button and call the prop function when clicked */}
          <button onClick={onToggleApps} className="hero-button">
            {isShowing
              ? "No! Hide The Projects Now!"
              : "Wanna See My Projects?"}
          </button>
        </div>
        <img src={myImage} alt="Alan Colburn" className="hero-img" />
      </div>
    </>
  );
}
