import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CarouselMovie from "../components/common/CarruselMovie";
import CarouselImage from "../components/common/CarruselImage";
import { movies } from "../data/movies";
import { styles } from '../config/theme/app-theme';

const HomeScreen = () => {
  const [currentMovies, setCurrentMovies] = useState(movies.slice(0, 5));
  const [allMovies, setAllMovies] = useState(movies.slice(0, 4));
  const getMoreMovies = (pagination, limit) => {
    console.log('getMoreMovies');
    setAllMovies([...allMovies, ...movies.slice(4, 6)]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <View>
          <CarouselMovie movies={allMovies} getMoreMovies={getMoreMovies} />
        </View>
        <View>
          <CarouselImage images={currentMovies} getMoreMovies={getMoreMovies} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;