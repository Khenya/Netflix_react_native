import { View, Text } from "react-native";
import { styles } from "../config/theme/app-theme";

const DescripcionCommingSoon = ({ starring, creators, description }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        width: 350,
        height: 100,
        marginTop: 20,
        marginLeft:30,
        // borderWidth:2,
        // borderColor:'white'
      }}
    >
      <Text style={{ color: "white",fontWeight:'200' }}>{description}</Text>
      <View style={{ flexDirection: "row", marginTop:10}}>
        <Text style={{ color: "white", fontWeight: "700", }}>Starring: </Text>
        <Text style={{ color: "white", fontWeight:'200' }}>{starring}</Text>
      </View>
      <View style={{ flexDirection: "row",}}>
        <Text style={{ color: "white", fontWeight: "700" }}>Creators: </Text>
        <Text style={{ color: "white",fontWeight:'200' }}>{creators}</Text>
      </View>
    </View>
  );
};

export default DescripcionCommingSoon;
