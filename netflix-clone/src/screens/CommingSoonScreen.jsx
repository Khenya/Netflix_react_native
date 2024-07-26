import { View, Text, ScrollView } from "react-native";

import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../config/theme/app-theme";
import MovieCommingSoonComponent from "../components/MovieCommingSoonComponent";
import DescripcionCommingSoon from "../components/DescripcionCommingSoon";
import ActivateNotificationComponent from "../components/ActivateNotificationComponent";
import TitlesCommingSoonComponent from "../components/TitlesCommingSoonComponent";
import DropdownComponent from "../components/DropdownComponent";
import CapitulosComponent from "../components/CapitulosComponents";


const image =
  "https://www.dolby.com/siteassets/xf-site/content-detail-pages/sv2_1280x1920_stothard_dolby_02.jpg";
const description =
  "Secrets, lies, Revenge. Everyone at Liberty High has something to hide... and the truth is about to come out.";

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
        <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10 }}>
          <Text style={{ color: "white", fontWeight: "800" }}>COMMING</Text>
          <Text style={{ color: "white", fontWeight: "300" }}>SOON</Text>
        </View>
        <MovieCommingSoonComponent imageUrl={{ uri: image }} />
        <Text
          style={{
            color: "white",
            marginLeft: 30,
            fontSize: 18,
            marginTop: 10,
          }}
        >
          13 Reasons Why
        </Text>
        <Text
          style={{
            color: "white",
            marginLeft: 30,
            fontSize: 8,
            margin: 2,
            fontWeight: "300",
          }}
        >
          SEASON 4
        </Text>
        <DescripcionCommingSoon
          creators={"Brian Yorkay"}
          starring={"Dylan Minnette, Katherine Langford, Alisha Boe"}
          description={description}
        />
        <ActivateNotificationComponent />
        <TitlesCommingSoonComponent
          titleP1={"EPISODES"}
          titleP2={"13 REASONS WHY "}
        />
        <DropdownComponent options={options} onSelect={handleSelect} />

        <ScrollView horizontal>
          <CapitulosComponent imageUrl={image} descriptionCapitulo={"1. Tape 1, Side A"} time={"    54m"}></CapitulosComponent>
        </ScrollView>
        <TitlesCommingSoonComponent
          titleP1={"ADITIONAL VIDEOS"}
          titleP2={"13 REASONS WHY"}
        />
        <ScrollView horizontal>
        <CapitulosComponent imageUrl={image} descriptionCapitulo={"Detras de Camaras"} time={"12m"}></CapitulosComponent>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommingSoonScreen;
