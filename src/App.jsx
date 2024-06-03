import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/sections/Home.jsx";
import About from "./components/sections/About.jsx";
import Showcase from "./components/sections/Showcase.jsx";
import Team from "./components/sections/Team.jsx";
import Faq from "./components/sections/Faq.jsx";
import Footer from "./components/sections/Footer.jsx";
function App() {
  return (
    <div className=" font-sora font-semibold">
      <Navbar />
      <Home />
      <About />
      <Showcase />
      <Team />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
