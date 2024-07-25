import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

const MovieCommingSoonComponent = ({ imageUrl }) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 200,
          width: 365,
          marginLeft: 30,
          marginRight:80,
          marginTop:10,
          borderRadius: 20,
          marginBottom:20,
          overflow: "hidden",
        }}
      >
        <Image style={{ flex: 1 }} source={imageUrl}></Image>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCommingSoonComponent;