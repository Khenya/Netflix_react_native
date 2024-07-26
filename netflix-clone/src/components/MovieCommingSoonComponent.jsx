import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const MovieCommingSoonComponent = ({ imageUrl }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 365,
    marginLeft: 30,
    marginRight: 80,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    borderRadius: 20, // Ajuste para que la imagen tenga los bordes redondeados
  },
});

export default MovieCommingSoonComponent;
