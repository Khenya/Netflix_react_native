import { SafeAreaView, ScrollView, Text } from 'react-native';

import { styles, colors } from '../config/theme/app-theme';

const DownloadScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
       
        <ScrollView >
         <Text style = {styles.title}>Desacargas</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

export default DownloadScreen;