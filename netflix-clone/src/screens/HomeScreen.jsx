import { SafeAreaView, ScrollView, Text } from 'react-native';

import { styles } from '../config/theme/app-theme';
import HeaderGeneralComponent from '../components/HeaderGeneralComponent';
import CarruselComponent from '../components/CarruselComponent';


const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView >
         <HeaderGeneralComponent />
         <CarruselComponent/>
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;