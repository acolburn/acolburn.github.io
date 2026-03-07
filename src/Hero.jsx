import myImage from "/assets/me.jpg";

export default function Hero({ onToggleApps, isShowing }) {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <p>
            Since retiring from the professoriate, I've unleashed the nerd and
            begun learning front end development skills. This website is a
            portfolio of projects showing some of the things I've learned
            through the years.
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
