import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AppList from "./AppList.jsx";
import myApps from "./myApps.js";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <AppList data={myApps} />
    </>
  );
}

export default App;
