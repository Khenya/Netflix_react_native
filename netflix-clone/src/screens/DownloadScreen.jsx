import { SafeAreaView, FlatList, Text } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../config/theme/app-theme';
import MovieBox from '../components/download/MovieBox';

const DownloadScreen = () => {
  const [downloads, setDownloads] = useState([
    { id: '1', title: 'Movie 1', description: 'bonita peli', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '2', title: 'Movie 2', description: 'una gran pelicula', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '3', title: 'Series 1', description: 'una serie increible', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '4', title: 'Movie 3', description: 'otra pelicula', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '5', title: 'Movie 4', description: 'gran pelicula', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '6', title: 'Series 2', description: 'otra serie', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '7', title: 'Movie 5', description: 'pelicula emocionante', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '8', title: 'Movie 6', description: 'buena pelicula', imageUrl: 'https://via.placeholder.com/80x120' },
    { id: '9', title: 'Series 3', description: 'una serie', imageUrl: 'https://via.placeholder.com/80x120' },
  ]);

  const handleDelete = (id) => {
    setDownloads(prevDownloads => prevDownloads.filter(download => download.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Downloads</Text>
      <FlatList
        data={downloads}
        renderItem={({ item }) => (
          <MovieBox
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default DownloadScreen;
