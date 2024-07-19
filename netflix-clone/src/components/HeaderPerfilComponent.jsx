import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome6";
import { styles } from "../config/theme/app-theme";
import { View, Text } from "react-native";

const HeaderPerfilComponent = () => {
  return (
    <View style={styles.containerHeaderMiNetlix}>
      <Text style={styles.title}>Mi Netflix</Text>
      <View style={styles.containerIconsHeader}>
        <Icon1 name="screen-share" size={27} color="white" />
        <Icon2 name="magnifying-glass" size={23} color="white" />
        <Icon1 name="menu" size={30} color="white" />
      </View>
    </View>
  );
};

export default HeaderPerfilComponent;
