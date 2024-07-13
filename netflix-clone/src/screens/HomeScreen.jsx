import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';



const HomeScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
       
        <ScrollView >
         <Text style = {styles.text}>holas</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50
  },
  text: {
    color: 'white'
  },
  divider: {
    marginVertical: 10
  }
});
export default HomeScreen;