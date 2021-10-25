import GamesUI from "./games.presenter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Games() {
  const [carImage, setCarImage] = useState("");
  useEffect(() => {
    async function getImage() {
      const car = await axios.get("https://forza-api.tk/");
      setCarImage(car.data.image);
    }
    getImage();
  }, []);
  return <GamesUI carImage={carImage} />;
}
