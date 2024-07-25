import { FlatList, ScrollView, Text, Dimensions  } from "react-native";
import Portada from "./Portada";
const CarouselMovies = ({ movies = [], getMoreMovies}) => {
  console.log("🚀 ~ CarouselImage ~ images:", movies);
  const { width } = Dimensions.get('window');
  return (
    <FlatList
      horizontal
      data={movies}
      renderItem={({ item }) => (
        <Portada
          image={item.uri}
          stylesPortada={{
            height: 200,
            width: width -20 ,
          }}
        />
      )}
      onEndReached={()=>getMoreMovies()}
      onEndReachedThreshold={0.2}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CarouselMovies;