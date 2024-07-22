import { ImageBackground, View, Text } from "react-native";
import { styles } from "../config/theme/app-theme";

const ActorsMovieComponent = ({ imageActor, nameActor }) => {
  return (
    <View style={styles.containerShadowActor}>
      <ImageBackground style={styles.containerActor} source={{ uri: imageActor }}>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:115}}>
          <Text style={{ color: "white" }}>
            {nameActor}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ActorsMovieComponent;
