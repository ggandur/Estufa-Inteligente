import { HomePageWrapper } from "./homePage.style";
import Title from "../title";
import Bottom from "../bottom";
import TemperatureDisplay from "../temperatureDisplay";
import DataType from "../../interfaces/dataType";

type HomePageProps = {
  data: DataType;
  setData: (data: DataType) => void;
};

function HomePage(props: HomePageProps) {
  return (
    <HomePageWrapper>
      <Title title={"PlantaGotchi"} setData={props.setData} />
      <TemperatureDisplay value={props.data.temperature} />
      <img
        src="src/assets/sunflowerGif.gif"
        alt="Example of Plant GIF"
        height={450}
      />
      <Bottom
        luminosityValue={props.data.luminosityValue}
        humidityValue={props.data.humidityValue}
      />
    </HomePageWrapper>
  );
}

export default HomePage;
