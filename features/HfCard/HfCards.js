import { ScrollView, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import HfData  from '../../shared/HfData';
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
import { useState } from 'react';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const HfCard = ({ navigation }) => {
    const [homeCard, setHomeCard] = useState(HfData);

    console.log('this homecard in HfCards;', homeCard);
    const renderHfCardItems = ({ item: homeCard }) => {
        return (
            <View
                style={styles.tileCard}
            >
                <Tile
                title={homeCard.name}
                featured
                // onPress={() => navigation.navigate(''{ campsite })}
                imageSrc={homeCard.image}
                titleStyle={{fontSize: 40, color: '#00ccff'}}
                onPress={() => navigation.navigate('Workout', { homeCard })}

            />
        </View>
        );
    }

    return (
        <FlatList
            data={homeCard}
            renderItem={renderHfCardItems}
            keyExtractor={(item) => item.id.toString()}
        />
    )
};

const styles = StyleSheet.create({
    tileCard: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 15,
        overflow: 'hidden',
        margin: 13,
        paddingTop:-10,
        paddingBottom:-10,
        marginBottom: 300,
        // marginTop: 10,
        // height: 430,
        // width: 300,
    }
})

export default HfCard;