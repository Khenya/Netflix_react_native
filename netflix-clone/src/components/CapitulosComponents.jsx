import { ImageBackground } from "react-native";
import { View, Text } from "react-native";

const CapitulosComponent = ({ imageUrl, descriptionCapitulo, time }) => {
  return (
    <View
      style={{
        height: 170,
        width: 170,
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 15,
        marginLeft: 30,
      }}
    >
      <ImageBackground source={{ uri: imageUrl }} style={{ flex: 1 }}>
        <View
          style={{
            width: 140,
            alignItems: "center",
            flexDirection: "row",
            marginTop: 150,
            marginLeft: 5,
          }}
        >
          <View style={{justifyContent:'space-between', flexDirection:'row'}}>
            <Text style={{ color: "white", fontWeight: "700" }}>
              {descriptionCapitulo}
            </Text>
            <Text style={{ color: "white", fontWeight: "700" }}>{time}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CapitulosComponent;
