import { View, TextInput } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { styles } from "../../config/theme/app-theme";

export const SearchBox = () => {
  return (
    <View style={styles.containerTextBox}>
      <Ionic name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="Buscar series, peliculas"
        placeholderTextColor="#ccc"
        style={styles.textInput}
      />
    </View>
  );
};

