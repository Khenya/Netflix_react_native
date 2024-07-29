import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import { styles } from "../config/theme/app-theme";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HeaderPerfilComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerHeaderMiNetlix}>
      <Text style={styles.title}>Mi Netflix</Text>
      <View style={styles.containerIconsHeader}>
        <Icon1 name="screen-share" size={27} color="white" />
        <Icon2 name="magnifying-glass" size={23} color="white" onPress={() => navigation.navigate("searchScreen")} />
        <Icon1 name="menu" size={30} color="black" />
      </View>
    </View>
  );
};

export default HeaderPerfilComponent;
