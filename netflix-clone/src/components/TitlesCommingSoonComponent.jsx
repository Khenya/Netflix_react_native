import { View, Text } from "react-native";

const TitlesCommingSoonComponent = ({ titleP1, titleP2 }) => {
  return (
    <View style={{
        flexDirection:'row',
        width:250,
        marginLeft:30,
        marginTop:20,
    }}>
      <Text style={{color:'white', fontWeight:'800', fontSize:15}}>{titleP1}  |</Text>
      <Text style={{color:'white', fontWeight:'300', fontSize:15}}> {titleP2}</Text>
    </View>
  );
};

export default TitlesCommingSoonComponent;
