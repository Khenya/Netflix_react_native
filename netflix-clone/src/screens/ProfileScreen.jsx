import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MovieComponent from "../components/MovieComponent."; // Asegúrate de que esta ruta sea correcta
import PerfilComponent from "../components/PerfilComponent";
import HeaderPerfilComponent from "../components/HeaderPerfilComponent";
import VistosRecientementeComponent from "../components/VistosRecientementeComponent";
import { styles } from "../config/theme/app-theme";

import { profileData } from "../data/profileData";

const { name, profilePicture } = profileData;

const image =
  "https://www.dolby.com/siteassets/xf-site/content-detail-pages/sv2_1280x1920_stothard_dolby_02.jpg";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <HeaderPerfilComponent />
        <PerfilComponent imagePerfil={image} namePerfil={"Thompson"} />
        <Text style={styles.subTitleForScroll}>Mi Lista</Text>
        <ScrollView horizontal>
          {/* {personalList && personalList.map((movie, index) => (
            <MovieComponent
              key={index}
              imageUrl={movie.imageUrl}
              nuevaTemporada={movie.nuevaTemporada}
              top10={movie.top10}
              neflix={movie.netflix}
            />
          ))} */}
          <MovieComponent
            imageUrl={image}
            >
          </MovieComponent>
        </ScrollView>
        <Text style={styles.subTitleForScroll}>Tráilers que has visto</Text>
        <ScrollView horizontal>
          <MovieComponent
            imageUrl={image}
            nuevaTemporada={true}
            top10={true}
            neflix={true}
          />
        </ScrollView>
        <Text style={styles.subTitleForScroll}>Vistos recientemente</Text>
        <ScrollView horizontal>
          <VistosRecientementeComponent
            imageUrl={image}
            nameMovie={"SpiderMan"}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
