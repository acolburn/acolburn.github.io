import React, { useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AppList from "./AppList.jsx";
import myApps from "./myApps.js";
import Footer from "./Footer.jsx";
function App() {
  const [showApps, setShowApps] = useState(false);

  const handleToggle = () => setShowApps(!showApps);

  return (
    <div className="app-wrapper">
      <Header />
      <div className="content">
      	<Hero onToggleApps={handleToggle} isShowing={showApps} />
      	<div className={`app-list-container ${showApps ? "show" : ""}`}>
        	<AppList data={myApps} />
      	</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
