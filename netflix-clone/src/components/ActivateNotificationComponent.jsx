import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors, styles } from "../config/theme/app-theme";

const ActivateNotificationComponent = () => {
  return (
    <TouchableOpacity>
      <View style={styles.containerActivateNotificaction}>
        <Icon name="notifications" size={25} color="white" />
        <Text style={{ fontWeight: "800", color: "white", fontSize: 15 }}>
          Activate
        </Text>
        <Text style={{ fontWeight: "800", color: colors.rojo3, fontSize: 15 }}>
          Notification
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActivateNotificationComponent;
