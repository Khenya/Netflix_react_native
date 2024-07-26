import { View, Text, ScrollView, SafeAreaView } from "react-native";

import { SearchBox } from "../components/common/SearchBox";
import HeaderGeneralComponent from "../components/HeaderGeneralComponent";
import MovieMyListComponent from "../components/MovieMyListComponent";
import { movies } from "../data/movies";
import { styles } from "../config/theme/app-theme";
const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
};

const SearchScreen = () => {
    return <SafeAreaView style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }}>
        <ScrollView>
            <HeaderGeneralComponent />
            <SearchBox />
            <View style={styles.photoContainer}>
            {Array.from({ length: 40 }).map((_, index) => (
                <MovieMyListComponent
                    key={index}
                    imageUrl={{ uri: getRandomMovie().uri }}
                    
                />
            ))}

            </View>
        </ScrollView>
    </SafeAreaView>
};

export default SearchScreen;

