import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Test from "./Test"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>services</section>
      <section id="portfolio">
        <Parallax type="portfolio"/>
      </section>
      <section id="contact">
        Contact
      </section>
    </div>
    // <Test/>
  )
};

export default App;