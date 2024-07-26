import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderGeneralComponent from '../components/HeaderGeneralComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../config/theme/app-theme';
import MovieCommingSoonComponent from '../components/MovieCommingSoonComponent';
import DescripcionCommingSoon from '../components/DescripcionCommingSoon';
import ActivateNotificationComponent from '../components/ActivateNotificationComponent';
import TitlesCommingSoonComponent from '../components/TitlesCommingSoonComponent';
import DropdownComponent from '../components/DropdownComponent';
import CapitulosComponent from '../components/CapitulosComponents';

import { movies } from '../data/movies';

const description =
  'Secrets, lies, Revenge. Everyone at Liberty High has something to hide... and the truth is about to come out.';

const CommingSoonScreen = () => {
  const options = [
    { label: 'Season 1', value: 1 },
    { label: 'Season 2', value: 2 },
    { label: 'Season 3', value: 3 },
  ];

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderGeneralComponent />
        <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 10 }}>
          <Text style={{ color: 'white', fontWeight: '800' }}>COMING</Text>
          <Text style={{ color: 'white', fontWeight: '300' }}> SOON</Text>
        </View>

        {movies.map((movie, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <MovieCommingSoonComponent imageUrl={movie.uri} />
            <Text style={{ color: 'white', marginLeft: 30, fontSize: 18, marginTop: 10 }}>
              {movie.title}
            </Text>
            <Text style={{ color: 'white', marginLeft: 30, fontSize: 8, margin: 2, fontWeight: '300' }}>
              {`SEASON ${index + 1}`} {/* Assuming each movie corresponds to a different season */}
            </Text>
            <DescripcionCommingSoon
              creators={'Brian Yorkay'}
              starring={'Dylan Minnette, Katherine Langford, Alisha Boe'}
              description={description}
            />
            <ActivateNotificationComponent />
            <TitlesCommingSoonComponent
              titleP1={'EPISODES'}
              titleP2={movie.title}
            />
            <DropdownComponent options={options} onSelect={handleSelect} />
          </View>
        ))}

        <TitlesCommingSoonComponent
          titleP1={'ADDITIONAL VIDEOS'}
          titleP2={'13 REASONS WHY'}
        />
        <ScrollView horizontal>
          {movies.map((movie, index) => (
            <CapitulosComponent
              key={index}
              imageUrl={movie.uri}
              descriptionCapitulo={`Behind the Scenes of ${movie.title}`}
              time={'12m'}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommingSoonScreen;
