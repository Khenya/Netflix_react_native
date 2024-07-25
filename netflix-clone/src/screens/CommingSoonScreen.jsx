import { View, Text } from "react-native";

import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../config/theme/app-theme";
import MovieCommingSoonComponent from "../components/MovieCommingSoonComponent";

const image =
  "https://www.dolby.com/siteassets/xf-site/content-detail-pages/sv2_1280x1920_stothard_dolby_02.jpg";

const CommingSoonScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderGeneralComponent />
      <View style={{ flexDirection: "row", marginLeft: 30, marginTop: 10 }}>
        <Text style={{ color: "white", fontWeight: "800" }}>COMMING</Text>
        <Text style={{ color: "white", fontWeight: "300" }}>SOON</Text>
      </View>
      <MovieCommingSoonComponent imageUrl={{ uri: image }} />
      <Text style={{ color: "white", marginLeft: 30, fontSize: 18, marginTop:10, }}>
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
    </SafeAreaView>
  );
};

export default CommingSoonScreen;
