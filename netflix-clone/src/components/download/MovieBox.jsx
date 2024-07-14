import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles, colors } from '../../config/theme/app-theme';

const MovieBox = ({ title, description, imageUrl, onDelete }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }}  />
      <View >
        <Text style={styles.titleMovieContainer}>{title}</Text>
        <Text style={styles.descriptionMovieContainer}>{description}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <FontAwesome name="trash"  style={styles.deleteButton}/>
      </TouchableOpacity>
    </View>
  );
};

export default MovieBox;
