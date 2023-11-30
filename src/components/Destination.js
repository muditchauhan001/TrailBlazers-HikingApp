import kedar1 from "../assets/ked1.jpg";
import kedar2 from "../assets/ked2.jpg";
import Kashmir from "../assets/3.jpg";
import Kashmir2 from "../assets/2.jpg";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Treks</h1>
      <p>Unleash Your Inner Explorer </p>
      <div className="first-des">
        <div className="des-text">
          <h2>Kedarkantha Trek , Dehradun</h2>
          <p>
            Get Ready to trek the most popular and adventurous Kedarkantha Trek
            located in Uttarkashi, Uttrakhand, India. Fringed with pine trees
            and decked with the prettiness of snow, Peak is often considered the
            best snow-trekking destination across the globe. Located at an
            altitude of 12,500 ft. above sea level, the trek to this mountain
            pass in Uttarakhand provides diverse levels of challenges to the
            voyagers. If you want to experience nature at its best and enjoy a
            wonderful trek then this Winter Snow Trek is definitely for you.
            During the trek, you will pass through mesmerizing picturesque
            views, rich forests, fields as well as snow trails. You need to know
            that Kedarkantha Summit is nestled in Govind wild life National
            santuary Park of Uttarkashi.
          </p>
        </div>
        <div className="image">
          <img alt="img" src={kedar1} />
          <img alt="img" src={kedar2} />
        </div>
      </div>

      <div className="first-des">
        <div className="des-text">
          <h2> Kashmir Great Lakes Trek</h2>
          <p>
            Cuddled up cosily amidst the mountains, Kashmir Great Lakes Trek is
            yet another hidden jewel of Kashmir as it validates Kashmir’s
            mythical status as heaven on earth. The beautiful Alpine and
            snow-clad mountains will walk through the paths, and green meadows,
            and rocky terrains are there to bound the journey. Every day is a
            360° panorama of wild, rugged mountains, rolling meadows and
            turquoise alpine lakes and you get more than seven of these lakes
            and five very different valleys to explore! The Kashmir Great Lakes,
            however, is an IMAX 3D experience – such is the grandeur of the
            trek. If you have not done this trek, put it on your bucket list!
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Kashmir} />
          <img alt="img" src={Kashmir2} />
        </div>
      </div>
    </div>
  );
};
export default Destination;
