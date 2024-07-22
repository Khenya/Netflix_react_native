import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View, Text, Button } from "react-native";
import { Divider } from "@rneui/themed";

import { styles } from "../config/theme/app-theme";
import HeaderDescripcionComponent from "../components/HeaderDescripcionMovie";
import DescripcionDetailMovieComponent from "../components/DescripcionDetailMovieComponent";
import ActorsMovieComponent from "../components/ActorsMovieComponent";
import ButtonsDescripcionVideoComponent from "../components/ButtonsDescripcionVideoComponent";

const imageUrl =
  "https://www.losandes.com.ar/resizer/NJYmwZh14D79quaF8Gp2H3NgAxA=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GYKN7AJQZRFSBEES6AFDQUXW44.jpeg";

const imageActor =
  "https://th.bing.com/th/id/OIP.u1WgK5sPD4jYkT1oUG-QQgHaHa?rs=1&pid=ImgDetMain";

const description =
  "A criminal mastermind who goes by 'The Porfesor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.... ";

const DescripcionMovieScreen = () => {
  return (
    <SafeAreaView style={styles.containerDescripcionMovieScreen}>
      <ScrollView>
        <HeaderDescripcionComponent imageUrl={imageUrl} />
        <DescripcionDetailMovieComponent
          match={"84% match"}
          year={"2018"}
          top={"15"}
          time={"1h 34m"}
          Descripcion={description}
        />
        <Divider style={{ width: 380, marginLeft: 22 }} />
        <View style={styles.containerCastCrew}>
          <Text style={styles.textCastCrew}>Cast & Crew</Text>
          <Button title="See All" color={"red"}></Button>
        </View>
        <ScrollView horizontal>
          <ActorsMovieComponent
            imageActor={imageActor}
            nameActor={"Alvaro Morte"}
          />
          <ActorsMovieComponent
            imageActor={imageActor}
            nameActor={"Alvaro Morte"}
          />
          <ActorsMovieComponent
            imageActor={imageActor}
            nameActor={"Alvaro Morte"}
          />
        </ScrollView>
        <Divider style={{ width: 380, marginLeft: 22 }} />
        <View style={{marginTop:25, flexDirection:'row',flex:1, }}>
          <ActorsMovieComponent
            imageActor={imageActor}
            nameActor={"Alex Pina"}
          />
          <View style={{flexDirection:'column', flex:1,margin:17,}}>
            <Text style={{color:'white',fontSize:20,fontWeight:'100'}}>Director</Text>
            <Text style={{color:'white', fontSize:10,marginTop:10, marginRight:50,}}>{description}</Text>
          </View>
        </View>
        <ButtonsDescripcionVideoComponent/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DescripcionMovieScreen;
