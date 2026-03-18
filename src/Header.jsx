import myLogo from "/assets/logo-removebg.png";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={myLogo} />
        </div>
        {/* <h1>Alan Colburn</h1> */}
        {/* <h2>Wannabe Front End Developer</h2> */}
        
      </header>
    </>
  );
}
