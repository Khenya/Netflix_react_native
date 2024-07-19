import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/theme/app-theme";

import Icon1 from "react-native-vector-icons/Entypo";

const PerfilComponent = ({ imagePerfil, namePerfil }) => {

    const goToChangePerfil =()=>{
        console.log("changePerfil")
    }
  return (
    <TouchableOpacity onPress={goToChangePerfil}>
      <View style={styles.containerGeneralPerfil}>
        <Image source={{ uri: imagePerfil }} style={styles.containerPerfil} />
        <View style={styles.containerTextPerfil}>
          <Text style={styles.textPerfil}>{namePerfil}</Text>
          <Icon1 name="chevron-small-down" size={27} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PerfilComponent;
