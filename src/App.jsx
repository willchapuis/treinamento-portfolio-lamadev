import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Test from "./Test"

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar/>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Projects</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
    // <Test/>
  )
};

export default App;
