import React, { useRef } from "react";
import {
  FlatList,
  Image,
  Dimensions,
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
        },
        animatedStyle,
      ]}
    >
      <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
    </Animated.View>
  );
};

const CarruselComponent = ({ movies }) => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const handleScroll = ({ nativeEvent }) => {
    scrollX.value = nativeEvent.contentOffset.x;
  };

  const infiniteData = [...movies, ...movies]; // Duplica los datos para el efecto infinito

  return (
    <AnimatedFlatList
      ref={flatListRef}
      horizontal
      data={infiniteData}
      renderItem={({ item, index }) => (
        <Item imageUrl={item.uri} index={index} scrollX={scrollX} />
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
