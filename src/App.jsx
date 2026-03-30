import { useState } from "react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import AppList from "./AppList.jsx";
import myApps from "./myApps.js";

function App() {
  const [showApps, setShowApps] = useState(false);

  const handleToggle = () => setShowApps(!showApps);

  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Hero onToggleApps={handleToggle} isShowing={showApps} />
        {showApps && <AppList data={myApps} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
