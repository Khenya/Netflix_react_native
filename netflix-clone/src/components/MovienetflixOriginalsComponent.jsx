import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

const MovieNetflixOriginalsComponent = ({ imageUrl }) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("descripcionMovieScreen")}>
      <View
        style={{
          height: 200,
          width: 130,
          marginLeft: 10,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image style={{ flex: 1 }} source={imageUrl}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default MovieNetflixOriginalsComponent;