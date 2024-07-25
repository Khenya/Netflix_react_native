import React, { useRef } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.9;
const SPACING = 2;

const DATA = [
  {
    id: "1",
    imageUrl:
      "https://imgmedia.larepublica.pe/1200x630/larepublica/original/2022/06/29/62bccb897ce8767d3c325eee.jpg",
  },
  {
    id: "2",
    imageUrl:
      "https://www.ramonacultural.com/wp-content/uploads/2022/01/Sing-2.jpg",
  },
  {
    id: "3",
    imageUrl: "https://i.ytimg.com/vi/YzeIsQLlocY/maxresdefault.jpg",
  },
  {
    id: "5",
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/8698aa0aa73e5acae0d4ec7fd46e6be40e7b9bd14668ce6d8694ae7442d2a722.jpg",
  },
  {
    id: "6",
    imageUrl:
      "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/24/1097116/Avatar.jpeg",
  },
];

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Item = ({ imageUrl, index, scrollX }) => {
  const inputRange = [
    (index - 1) * ITEM_WIDTH,
    index * ITEM_WIDTH,
    (index + 1) * ITEM_WIDTH,
  ];

  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 210,
          width: ITEM_WIDTH,
          marginHorizontal: SPACING / 2,
          marginTop: 20,
          borderRadius: 20,
          overflow: "hidden",
          // borderWidth: 2,
          // borderColor: 'white'
        },
        animatedStyle,
      ]}
    >
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} /> 
        {/* como hacer click sin que desaparesca la imagen preguntar */}
    </Animated.View>
  );
};

const CarruselComponent = () => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const handleScroll = ({ nativeEvent }) => {
    scrollX.value = nativeEvent.contentOffset.x;
  };

  const infiniteData = [...DATA, ...DATA]; // Duplica los datos para el efecto infinito

  return (
    <AnimatedFlatList
      ref={flatListRef}
      horizontal
      data={infiniteData}
      renderItem={({ item, index }) => (
        <Item imageUrl={item.imageUrl} index={index} scrollX={scrollX} />
      )}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToInterval={ITEM_WIDTH}
      snapToAlignment="center"
      bounces={false}
      onEndReached={() => {
        flatListRef.current.scrollToOffset({ animated: false, offset: 0 });
      }}
    />
  );
};

export default CarruselComponent;
