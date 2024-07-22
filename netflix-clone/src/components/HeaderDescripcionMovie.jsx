import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Icon1 from "react-native-vector-icons/Entypo";
import { styles } from "../config/theme/app-theme";

import MultipleButtonsComponent from "./MultipleButtonsComponent";
const logoNetflixx = require("../assets/LogoNetflixHeader.png");

const HeaderDescripcionComponent = ({ imageUrl }) => {
  return (
    <View style={styles.containerHeaderImageWithBottons}>
      {/* <View style={styles.containerHeaderWithImage}> */}
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.containerImageDescripcionMovie}
      >
        <View style={styles.containerHeader}>
          <Icon1 name="menu" size={25} color="white" />
          <Image source={logoNetflixx} style={styles.containerLogoNetflixx2} />
          <Icon1 name="heart-outlined" size={25} color="white" />
        </View>
        <MultipleButtonsComponent />
      </ImageBackground>
      {/* </View> */}
    </View>
  );
};

export default HeaderDescripcionComponent;
