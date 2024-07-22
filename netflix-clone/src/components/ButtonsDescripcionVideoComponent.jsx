import { View, Button } from "react-native";
import { styles } from "../config/theme/app-theme";

const ButtonsDescripcionVideoComponent = () => {
  const goToOverview = () => {
    console.log("goToOverview");
  };
  const goToSeasons = () => {
    console.log("goToOverview");
  };
  const goToSimilar = () => {
    console.log("goToOverview");
  };

  return (
    <View style={styles.containerButtonsMovieDescription}>
      <Button onPress={goToOverview} title="Overview" color={"white"}></Button>
      <Button onPress={goToSeasons} title="Seasons" color={"white"}></Button>
      <Button onPress={goToSimilar} title="Similar" color={"white"}></Button>
    </View>
  );
};

export default ButtonsDescripcionVideoComponent;
