import { View, Text, ScrollView, SafeAreaView } from "react-native";
import {SearchBox} from "../components/common/SearchBox";
const SearchScreen = () => {
    return <SafeAreaView style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    }}>
        <ScrollView>
            <SearchBox/>
        </ScrollView>
    </SafeAreaView>
};

export default SearchScreen;

