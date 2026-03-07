import React, { useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AppList from "./AppList.jsx";
import myApps from "./myApps.js";
import Footer from "./Footer.jsx";
function App() {
  // 1. Create the state (starting as false/hidden)
  const [showApps, setShowApps] = useState(false);
  // 2. Create a function to flip that state
  const handleToggle = () => setShowApps(!showApps);

  return (
    <>
      <Header />
      {/* 3. Pass the function to Hero as a prop  */}
      <Hero onToggleApps={handleToggle} isShowing={showApps} />
      {/* We keep the component rendered, but wrap it in a div 
          that toggles the 'show' class 
      */}
      <div className={`app-list-container ${showApps ? "show" : ""}`}>
        <AppList data={myApps} />
      </div>
      <Footer />
    </>
  );
}

export default App;
