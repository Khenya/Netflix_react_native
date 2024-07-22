import { View, Text } from "react-native";

const DescripcionDetailMovieComponent = ({
  Descripcion,
  match,
  year,
  time,
  top,
}) => {
  return (
    <View style={{ height: 80, width: 400, margin: 20,  }}>
        {/* borderWidth:2, borderColor:'white' */}
      <View style={{ flexDirection: "row", marginBottom: 20, }}>
        <Text
          style={{
            color: "green",
            fontSize: 13,
            fontWeight: "900",
            marginRight: 10,
          }}
        >
          {match}
        </Text>
        <Text style={{ color: "white", fontSize: 13, marginRight: 10 }}>
          {year}
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 13,
            backgroundColor: "white",
            marginRight: 10,
          }}
        >
          {top}
        </Text>
        <Text style={{ color: "white", fontSize: 13 }}>{time}</Text>
      </View>
      <Text style={{ color: "white", fontSize: 13 }}>{Descripcion}</Text>
    </View>
  );
};

export default DescripcionDetailMovieComponent;
