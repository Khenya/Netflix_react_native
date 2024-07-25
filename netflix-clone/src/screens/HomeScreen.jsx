import { SafeAreaView, ScrollView, Text, View } from "react-native";

import { styles } from "../config/theme/app-theme";
import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import CarruselComponent from "../components/CarruselComponent";
import MovieContinueWatchingComponent from "../components/MovieContinueWatchingComponent";
import MovieMyListComponent from "../components/MovieMyListComponent";
import ListsHomeComponent from "../components/ListsHomeComponent";
import MovieNetflixOriginalsComponent from "../components/MovienetflixOriginalsComponent";
const image =
  "https://www.dolby.com/siteassets/xf-site/content-detail-pages/sv2_1280x1920_stothard_dolby_02.jpg";

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderGeneralComponent />
        <CarruselComponent />
        <ListsHomeComponent title1={"CONTINUE"} title2={"WATCHING"}/>
        <ScrollView horizontal >
          <MovieContinueWatchingComponent imageUrl={{uri:image}} tiempoVideoVisto={30}/>
          <MovieContinueWatchingComponent imageUrl={{uri:image}} tiempoVideoVisto={60}/>
          <MovieContinueWatchingComponent imageUrl={{uri:image}} tiempoVideoVisto={80}/>
          <MovieContinueWatchingComponent imageUrl={{uri:image}} tiempoVideoVisto={45}/>
        </ScrollView>
        <ListsHomeComponent title1={"MY"} title2={"LIST"}/>
        <ScrollView horizontal>
          <MovieMyListComponent imageUrl={{uri:image}}/>
          <MovieMyListComponent imageUrl={{uri:image}}/>
          <MovieMyListComponent imageUrl={{uri:image}}/>
          <MovieMyListComponent imageUrl={{uri:image}}/>
          <MovieMyListComponent imageUrl={{uri:image}}/>
        </ScrollView>
        <ListsHomeComponent title1={"NETFLIX"} title2={"ORIGINALS"}/>
        <ScrollView horizontal>
          <MovieNetflixOriginalsComponent imageUrl={{uri:image}}/>
          <MovieNetflixOriginalsComponent imageUrl={{uri:image}}/>
          <MovieNetflixOriginalsComponent imageUrl={{uri:image}}/>
          <MovieNetflixOriginalsComponent imageUrl={{uri:image}}/>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
