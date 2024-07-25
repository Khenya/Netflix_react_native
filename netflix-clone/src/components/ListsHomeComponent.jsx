import { styles } from "../config/theme/app-theme";
import { View, Text } from "react-native";
import Icon1 from "react-native-vector-icons/MaterialIcons";

const ListsHomeComponent = ({title1, title2}) => {
    const goToListWatching = () => {
        console.log("goToListWatching");
      };

  return (
    <View style={styles.containerContinueWatching}>
      <Text style={{ color: "white", fontSize: 15, fontWeight: "200" }}>
        {title1}
      </Text>
      <Text
        style={{ color: "white", fontSize: 15, fontWeight: "800", margin:5, }}
        onPress={goToListWatching}
      >
        {title2}
      </Text>
      <Icon1
        onPress={goToListWatching}
        name="navigate-next"
        size={24}
        color="white"
      />
    </View>
  );
};

export default ListsHomeComponent;
