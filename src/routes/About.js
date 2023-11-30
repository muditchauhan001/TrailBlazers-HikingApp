import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import AboutUs from "../components/AboutUs.js";
import Footer from "../components/Footer.js";
import midImg from "../assets/4.jpg";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={midImg}
        title="About Us"
        url="/"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
