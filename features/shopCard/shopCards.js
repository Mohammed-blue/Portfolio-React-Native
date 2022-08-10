import { ScrollView } from 'react-native';
import ShopData  from '../../shared/shopData';
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
import { useState } from 'react';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const ShopCard = () => {
    const [shopCard, setShopCard] = useState(ShopData);


    return (
        <ScrollView>
            {shopCard.map((shopCard) => {
                return (
                    // <ListItem key={successStory.id}>
                    //     <Image>{successStory.image}</Image>
                    //     <ListItem.Content>
                    //         <ListItem.Title>{successStory.title}</ListItem.Title>
                    //         <ListItem.Subtitle>{successStory.description}</ListItem.Subtitle>
                    //     </ListItem.Content>
                    // </ListItem>
                    <Card key={shopCard.id}>
                        <Card.Image source={shopCard.image}
                        style={{
                            alignSelf: 'center',
                            height: 250,
                            width: 200,
                            borderRadius: 2,
                            paddingLeft: 300,
                            paddingBottom: 350,
                        }} resizeMode="stretch"/>
                    </Card>

                )
            }
            )}
    </ScrollView>
    )
};



export default ShopCard;