import myLogo from "./assets/logo-removebg.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={myLogo} />
        </div>
        {/* <h1>Alan Colburn</h1> */}
        {/* <h2>Wannabe Front End Developer</h2> */}
        <h1>
          Good day, <span className="pink">again!</span>
        </h1>
      </header>
    </>
  );
}
