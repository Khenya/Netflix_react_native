import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

const MovieMyListComponent = ({ imageUrl }) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("descripcionMovieScreen")}>
      <View
        style={{
          height: 130,
          width: 95,
          marginLeft: 5,
          marginTop:5,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image style={{ flex: 1 }} source={imageUrl}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default MovieMyListComponent;
