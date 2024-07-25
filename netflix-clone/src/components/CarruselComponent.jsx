import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Animated, {interpolate,Extrapolation,useSharedValue} from "react-native-reanimated";


const DATA = [
  {
    id: "1",
    imageUrl: "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2022/06/29/62bccb897ce8767d3c325eee.jpg",
  },
  {
    id: "2",
    imageUrl: "https://www.ramonacultural.com/wp-content/uploads/2022/01/Sing-2.jpg",
  },
  {
    id: "3",
    imageUrl: "https://i.ytimg.com/vi/YzeIsQLlocY/maxresdefault.jpg",
  },
  {
    id: "5",
    imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/8698aa0aa73e5acae0d4ec7fd46e6be40e7b9bd14668ce6d8694ae7442d2a722.jpg",
  },
  {
    id: "6",
    imageUrl: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/24/1097116/Avatar.jpeg",
  },
];

const Item = ({ imageUrl }) => (
  <View style={{ height: 200, width: 330, marginHorizontal: 7,marginTop: 20, borderRadius:30,overflow:'hidden' }}>
    <Image
      source={{ uri: imageUrl }}
      style={{ flex:1, }}
    />
  </View>
);

const CarruselComponent = () => {
  return (
    <FlatList
      horizontal
      data={DATA}
      renderItem={({ item }) => <Item imageUrl={item.imageUrl} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CarruselComponent;

