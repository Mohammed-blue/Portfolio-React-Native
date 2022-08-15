import { ScrollView, Text, View, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {useState } from 'react';
import CarouselCards from '../features/carouselCard/CarouselCards'
import carouselData from '../shared/carouselData'
import HfCard from '../features/HfCard/HfCards'
import HfData from '../shared/HfData'
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';


const HomeScreen = ({ navigation }) => {
    const [homeCard, setHomeCard] = useState(HfData);

    const renderHfCards = ({item} ) =>{
    return (
    <View
                // style={styles.tileCard}
            >
                <Tile
                title={item.name}
                featured
                // onPress={() => navigation.navigate(''{ campsite })}
                imageSrc={item.image}
                titleStyle={{fontSize: 40, color: '#00ccff'}}
                onPress={() => navigation.navigate('Workout', { item })}

            />
        </View>
    )
    }

    return (
        <View>

            <CarouselCards data={carouselData} />
            {/* <HfCard navigation={navigation}/> */}
            <FlatList
            data={homeCard}
            renderItem={renderHfCards}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

//rendaeHfCrads

export default HomeScreen;