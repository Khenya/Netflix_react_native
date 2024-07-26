import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../../config/theme/app-theme';
const MovieBox = ({ title, description, imageUrl, onDelete }) => {
  return (
    <View style={styles.containerDownlads}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.titleMovieContainer}>{title}</Text>
        {description && <Text style={styles.descriptionMovieContainer}>{description}</Text>}
      </View>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};



export default MovieBox;
