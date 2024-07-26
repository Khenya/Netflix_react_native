import React from "react";
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../config/theme/app-theme";

const logoNetflix = require("../assets/netflixlogo.png");

const MovieComponent = ({ imageUrl, neflix, top10, nuevaTemporada }) => {
  const navigation = useNavigation();
  const goToMovie = () => {
    console.log("goToMovie");
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate("descripcionMovieScreen")}>
      <View style={styles.containerMovie}>
        <ImageBackground
          source={{ uri: imageUrl }}
          style={styles.containerimageBackground}
        >
          <View style={styles.headerComponentMovie}>
            {neflix && (
              <Image
                style={styles.containerLogoNetflix}
                source={logoNetflix}
              ></Image>
            )}
            <View>
              {top10 && <Text style={styles.textTop10}>Top{"\n"}10</Text>}
            </View>
          </View>
          {nuevaTemporada && (
            <View style={styles.headerBottomComponentMovie}>
              <Text style={styles.textNuevaTemporada}>Nueva Temporada</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MovieComponent;
