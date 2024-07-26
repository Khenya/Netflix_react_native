import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "../config/theme/app-theme";
import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import CarruselComponent from "../components/CarruselComponent";
import MovieContinueWatchingComponent from "../components/MovieContinueWatchingComponent";
import MovieMyListComponent from "../components/MovieMyListComponent";
import ListsHomeComponent from "../components/ListsHomeComponent";
import MovieNetflixOriginalsComponent from "../components/MovienetflixOriginalsComponent";
import { movies } from "../data/movies";

// Función para seleccionar una película aleatoria
const getRandomMovie = () => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};

const HomeScreen = () => {
  const [allMovies, setAllMovies] = useState(movies.slice(0, 5));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderGeneralComponent />
        <CarruselComponent movies={allMovies} />
        <ListsHomeComponent title1={"CONTINUE"} title2={"WATCHING"} />
        <ScrollView horizontal>
          {Array.from({ length: 4 }).map((_, index) => (
            <MovieContinueWatchingComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
              tiempoVideoVisto={Math.floor(Math.random() * 100)} // Genera un tiempo de video visto aleatorio
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"MY"} title2={"LIST"} />
        <ScrollView horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieMyListComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"NETFLIX"} title2={"ORIGINALS"} />
        <ScrollView horizontal>
          {Array.from({ length: 4 }).map((_, index) => (
            <MovieNetflixOriginalsComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"Critically acclaimed series"} title2={"LIST"} />
        <ScrollView horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieMyListComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"Anime"} title2={"LIST"} />
        <ScrollView horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieMyListComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"Romantic series"} title2={"LIST"} />
        <ScrollView horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieMyListComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
        <ListsHomeComponent title1={"Movies based on books"} title2={"LIST"} />
        <ScrollView horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <MovieMyListComponent
              key={index}
              imageUrl={{ uri: getRandomMovie().uri }}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
