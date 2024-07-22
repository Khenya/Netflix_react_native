import React from "react"
import { View,Text, Image } from "react-native"
import Icon1 from "react-native-vector-icons/Entypo";
import { styles } from "../config/theme/app-theme";

const logoNetflixx = require("../assets/LogoNetflixHeader.png");

const avatarDefault = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";


const HeaderGeneralComponent = ({avatar = avatarDefault}) => {
    return (
        <View style={styles.containerHeader}>
            <Icon1 name="menu" size={30} color="white" />
            <Image source={logoNetflixx} style={styles.containerLogoNetflixx}/>
            <Image source={avatar} style={styles.containerAvatar}/>
        </View>
    )
}

export default HeaderGeneralComponent