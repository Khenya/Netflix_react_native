import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "../config/theme/app-theme";
import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import CarruselComponent from "../components/CarruselComponent";
import MovieContinueWatchingComponent from "../components/MovieContinueWatchingComponent";
import MovieMyListComponent from "../components/MovieMyListComponent";
import ListsHomeComponent from "../components/ListsHomeComponent";
import MovieNetflixOriginalsComponent from "../components/MovienetflixOriginalsComponent";

import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CarouselMovie from "../components/common/CarruselMovie";
import CarouselImage from "../components/common/CarruselImage";
import { movies } from "../data/movies";


const image =
  "https://www.dolby.com/siteassets/xf-site/content-detail-pages/sv2_1280x1920_stothard_dolby_02.jpg";

const HomeScreen = () => {
  // const [currentMovies, setCurrentMovies] = useState(movies.slice(0, 5));
  // const [allMovies, setAllMovies] = useState(movies.slice(0, 4));
  // const getMoreMovies = (pagination, limit) => {
  //   console.log('getMoreMovies');
  //   setAllMovies([...allMovies, ...movies.slice(4, 6)]);
  // }
  {
    /* <ScrollView >
    <View>
      <CarouselMovie movies={allMovies} getMoreMovies={getMoreMovies} />
    </View>
    <View>
      <CarouselImage images={currentMovies} getMoreMovies={getMoreMovies} />
    </View>
  </ScrollView> */
  }
  return (
    <SafeAreaView style={styles.comtainer}>
      <ScrollView>
        <HeaderGeneralComponent />
        <CarruselComponent />
        <ListsHomeComponent title1={"CONTINUE"} title2={"WATCHING"} />
        <ScrollView horizontal>
          <MovieContinueWatchingComponent
            imageUrl={{ uri: image }}
            tiempoVideoVisto={30}
          />
          <MovieContinueWatchingComponent
            imageUrl={{ uri: image }}
            tiempoVideoVisto={60}
          />
          <MovieContinueWatchingComponent
            imageUrl={{ uri: image }}
            tiempoVideoVisto={80}
          />
          <MovieContinueWatchingComponent
            imageUrl={{ uri: image }}
            tiempoVideoVisto={45}
          />
        </ScrollView>
        <ListsHomeComponent title1={"MY"} title2={"LIST"} />
        <ScrollView horizontal>
          <MovieMyListComponent imageUrl={{ uri: image }} />
          <MovieMyListComponent imageUrl={{ uri: image }} />
          <MovieMyListComponent imageUrl={{ uri: image }} />
          <MovieMyListComponent imageUrl={{ uri: image }} />
          <MovieMyListComponent imageUrl={{ uri: image }} />
        </ScrollView>
        <ListsHomeComponent title1={"NETFLIX"} title2={"ORIGINALS"} />
        <ScrollView horizontal>
          <MovieNetflixOriginalsComponent imageUrl={{ uri: image }} />
          <MovieNetflixOriginalsComponent imageUrl={{ uri: image }} />
          <MovieNetflixOriginalsComponent imageUrl={{ uri: image }} />
          <MovieNetflixOriginalsComponent imageUrl={{ uri: image }} />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
