import { SafeAreaView, ScrollView, Text } from 'react-native';

import { styles } from '../config/theme/app-theme';

const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
         <Text style = {styles.text}>holas</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;