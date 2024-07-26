import { SafeAreaView, FlatList, Text } from 'react-native';
import React, { useState } from 'react';

import { styles } from '../config/theme/app-theme';
import MovieBox from '../components/download/MovieBox';
import { movies } from '../data/movies'; 
import HeaderGeneralComponent from '../components/HeaderGeneralComponent';

const DownloadScreen = () => {
  const [downloads, setDownloads] = useState(movies);

  const handleDelete = (id) => {
    setDownloads(prevDownloads => prevDownloads.filter(download => download.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneralComponent />
      <Text style={styles.title}>Downloads</Text>
      <FlatList
        data={downloads}
        renderItem={({ item }) => (
          <MovieBox
            title={item.title}
            description={item.description}
            imageUrl={item.uri}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default DownloadScreen;
