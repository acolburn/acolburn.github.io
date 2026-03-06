import myImage from "./assets/me.jpg";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <p className="hero-text">
          Since retiring from the professoriate, I've unleashed the nerd in me
          and begun learning front end development skills. This website is a
          portfolio of projects showing some of the thingsI've learned through
          the years.
        </p>
        <img src={myImage} alt="Alan Colburn" className="hero-img" />
      </div>
    </>
  );
}
