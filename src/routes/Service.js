import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";
import midImg from "../assets/7.jpg";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={midImg}
        title="Services"
        url="/"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
