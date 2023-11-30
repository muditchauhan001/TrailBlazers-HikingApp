import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";

import mainImg from "../assets/1.jpeg";
import Destination from "../components/Destination.js";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={mainImg}
        title="Find Your Hiking Tribe"
        text="For Those Who Seek More "
        buttonText="Explore"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />

      <Footer />
    </>
  );
}

export default Home;
