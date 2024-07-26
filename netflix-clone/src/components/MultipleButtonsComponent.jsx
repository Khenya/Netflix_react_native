import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../config/theme/app-theme";
import { useNavigation } from "@react-navigation/native";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/SimpleLineIcons";
import Icon3 from "react-native-vector-icons/Octicons";
import { colors } from "../config/theme/app-theme";

const MultipleButtonsComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerMultipleButtons}>
      <View style={styles.containerButtonText}>
        <Icon1
          name="share-alternative"
          size={20}
          color={"white"}
          style={styles.containerButtonOfMultipleButtons}
          
        />
        <Text style={styles.textContainerButtonText}>Share</Text>
      </View>
      <View style={styles.containerButtonText}>
        <View>
          <Icon2
            name="like"
            size={20}
            color={"white"}
            style={styles.containerButtonOfMultipleButtons}
          />
        </View>
        <Text style={styles.textContainerButtonText}>Rate</Text>
      </View>
      <TouchableOpacity style={styles.containerButtonText} onPress={()=> navigation.navigate("playMovieScreen")}>
        <Icon1
          name="controller-play"
          size={20}
          color={"white"}
          style={styles.containerButtonOfMultipleButtons}
        />
        <Text style={styles.textContainerButtonText}>Play</Text>
      </TouchableOpacity>
      <View style={styles.containerButtonText}>
        <Icon3
          name="download"
          size={21}
          color={"white"}
          style={{
            height: 35,
            width: 35,
            padding: 6,
            borderWidth: 2,
            borderColor: colors.rojo3,
            borderRadius: 17,
            paddingLeft:9,
          }}
        />
        <Text style={styles.textContainerButtonText}>Download</Text>
      </View>
    </View>
  );
};

export default MultipleButtonsComponent;
