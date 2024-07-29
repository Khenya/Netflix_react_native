import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Icon1 from "react-native-vector-icons/Entypo";
import { styles } from "../config/theme/app-theme";
import { useNavigation } from '@react-navigation/native';

const logoNetflixx = require("../assets/LogoNetflixHeader.png");
const avatarDefault =
"https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

const HeaderGeneralComponent = ({ avatar = avatarDefault }) => {
    const navigation = useNavigation();
    const goToProfile = () => {
        navigation.navigate("profileScreen", { name: title });
      };

  return (
    <View style={styles.containerHeader}>
      <Icon1 name="menu" size={30} color="black" />
      <Image source={logoNetflixx} style={styles.containerLogoNetflixx} />
      <Pressable onPress={()=> navigation.navigate("profileScreen")}>
        <Image source={{uri:avatar}} style={styles.containerAvatar} />
      </Pressable>
    </View>
  );
};

export default HeaderGeneralComponent;
