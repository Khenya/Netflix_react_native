import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../config/theme/app-theme";

const VistosRecientementeComponent = ({ imageUrl, nameMovie }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("descripcionMovieScreen")}>
      <View style={{marginLeft:10}}>
        <ImageBackground
          style={styles.containerVistoRecientemente}
          source={{ uri: imageUrl }}
        >
          <View style={styles.shareMovieVistoRecientemente}>
            <Icon1 name="paper-plane-outline" size={27} color="white" />
            <Icon2 name="more-vertical" size={27} color="white" />
          </View>
        </ImageBackground>
        <View style={styles.containerTitleVistoRecientementeMovie}>
          <Text style={styles.textTitleVistoRecientementeMovie}>
            {nameMovie}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VistosRecientementeComponent;
