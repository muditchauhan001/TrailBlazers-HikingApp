import "./TripStyles.css";
import TripData from "./TripData.js";
import Trip1 from "../assets/6.jpg";
import Trip2 from "../assets/5.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Exciting Treks</h1>
      <p>For Those Who Seek More</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Everest Base Camp Trek, Nepal"
          text="They call it the “steps to heaven” for a good reason. To go to the base camp of the highest mountain in the world is on every mountain lover’s bucket list. You will look at the scenery that’s so breathtakingly stunning and unlike any mountainous terrain that you have ever seen before."
        />
        <TripData
          image={Trip2}
          heading="Kedarkantha Trek , Uttrakhand"
          text="Kedarkantha is such a popular winter trek that it would be apt to entitle it as the Queen of Winter Treks. Knee-deep snow in winters, mesmerizing view from the top, and beautiful and easy trails make it popular among trekkers. The ‘easy on endurance’ trail goes through the thick pine forests of Govind National Park. The views from the top are worth climbing to an altitude of 12,500 ft."
        />
        <TripData
          image={Trip3}
          heading="Sar Pass Trek, Kasol "
          text="Perched at 13,800 ft. above sea level, Sar Pass offers the magnificence of a beautiful verdant landscape and is a heaven for photographers, artists, and nature lovers. Set against a curtain of majestic Himalayan peaks wrapped in snow, the Sar Pass trek passes through some of the most scenic views ranging from forests to the meadows to the ice blankets."
        />
      </div>
    </div>
  );
}

export default Trip;
