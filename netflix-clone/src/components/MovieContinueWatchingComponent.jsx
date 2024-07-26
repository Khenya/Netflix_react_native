import { color, Icon } from "@rneui/base";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon1 from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const MovieContinueWatchingComponent = ({ imageUrl, tiempoVideoVisto }) => {
    const navigation = useNavigation();

    return (
    <TouchableOpacity onPress={() => navigation.navigate("playMovieScreen")} >
      <View
        style={{
          height: 190,
          width: 130,
          marginLeft: 5,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Image style={{ flex: 1 }} source={imageUrl}></Image>
        <View>
          <View style={{ backgroundColor: "white", height: 3 }}>
            <View
              style={{
                backgroundColor: "red",
                height: 3,
                width: tiempoVideoVisto,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "gray",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 15,
                padding: 5,
                margin: 5,
                fontWeight: "200",
              }}
            >
              S1:E1
            </Text>
            <Icon1
              name="playcircleo"
              size={25}
              color={"white"}
              style={{ marginRight: 30 }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieContinueWatchingComponent;
