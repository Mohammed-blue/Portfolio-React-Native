import { ScrollView, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import HfData  from '../../shared/HfData';
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
import { useState } from 'react';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const HfCard = ({ navigation }) => {
    const [homeCard, setHomeCard] = useState(HfData);

    const renderHfCardItems = ({ item: homeCard }) => {
        return (
            // <ListItem>
            //     <Avatar source={homeCard.image} />
            //     <ListItem.Content>
            //         <ListItem.Title>{homeCard.name}</ListItem.Title>
            //     </ListItem.Content>
            // </ListItem>

            // <Card >
            //     <Card.Image
            //     source={homeCard.image}
            //     style={styles.tileCard}
            //     />
            //     <Card.Title>{homeCard.name}</Card.Title>
            // </Card>
            <View
                style={styles.tileCard}
            >
                <Tile
                title={homeCard.name}
                featured
                // onPress={() => navigation.navigate(''{ campsite })}
                imageSrc={homeCard.image}
                titleStyle={{fontSize: 40, color: '#00ccff'}}
                // height={300}
                // width={200}
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