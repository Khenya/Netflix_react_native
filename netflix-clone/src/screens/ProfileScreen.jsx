import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MovieCommingSoonComponent from '../components/MovieCommingSoonComponent'; // Asegúrate de que esta ruta sea correcta
import PerfilComponent from '../components/PerfilComponent';
import HeaderPerfilComponent from '../components/HeaderPerfilComponent';
import VistosRecientementeComponent from '../components/VistosRecientementeComponent';
import { styles } from '../config/theme/app-theme';

import { profileData } from '../data/profileData';
import { movies } from '../data/movies';

const { name, profilePicture } = profileData;
const avatarDefault =
"https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

const getRandomMovies = (count) => {
  const shuffled = movies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ProfileScreen = () => {
  const randomMovies = getRandomMovies(5); // Selecciona 5 películas aleatorias

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <HeaderPerfilComponent />
        <PerfilComponent imagePerfil={avatarDefault} namePerfil={"Jhon"} />
        <Text style={styles.subTitleForScroll}>Mi Lista</Text>
        <ScrollView horizontal>
          {randomMovies.map((movie, index) => (
            <MovieCommingSoonComponent
              key={index}
              imageUrl={movie.uri}
              title={movie.title}
            />
          ))}
        </ScrollView>
        <Text style={styles.subTitleForScroll}>Tráilers que has visto</Text>
        <ScrollView horizontal>
          {randomMovies.map((movie, index) => (
            <MovieCommingSoonComponent
              key={index}
              imageUrl={movie.uri}
              nuevaTemporada={true}
              top10={true}
              netflix={true}
            />
          ))}
        </ScrollView>
        <Text style={styles.subTitleForScroll}>Vistos recientemente</Text>
        <ScrollView horizontal>
          {randomMovies.map((movie, index) => (
            <VistosRecientementeComponent
              key={index}
              imageUrl={movie.uri}
              nameMovie={movie.title}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
