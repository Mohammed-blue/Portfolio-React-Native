import { ScrollView, Text } from 'react-native';
// import ShopData  from '../../shared/shopData';
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
import { useState } from 'react';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const Workout = ({ item }) => {
    console.log('this is homcard:', item);
    return (
                    // <ListItem>
            //     <Avatar source={homeCard.image} />
            //     <ListItem.Content>
            //         <ListItem.Title>{homeCard.name}</ListItem.Title>
            //     </ListItem.Content>
            // </ListItem>


        <ScrollView>
            <Card >
                <Card.Image
                source={item.image}
                // style={styles.tileCard}
                />
                <Card.Title>{item.name}</Card.Title>
            </Card>
        </ScrollView>
    )
}

export default Workout