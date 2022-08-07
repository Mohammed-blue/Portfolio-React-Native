import { ScrollView, FlatList, Text, View, StyleSheet, Image } from 'react-native';
import ShopData  from '../../shared/shopData';
import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
import { useState } from 'react';
// import Loading from '../components/LoadingComponent';
// import * as Animatable from 'react-native-animatable';

const ShopCard = () => {
    const [shopCard, setShopCard] = useState(ShopData);

    // const renderShopCardItems = ({ item: shopCard }) => {
    //     return (
    //         // <ListItem>
    //         //     <Avatar source={homeCard.image} />
    //         //     <ListItem.Content>
    //         //         <ListItem.Title>{homeCard.name}</ListItem.Title>
    //         //     </ListItem.Content>
    //         // </ListItem>

    //         // <Card >
    //         //     <Card.Image
    //         //     source={homeCard.image}
    //         //     style={styles.tileCard}
    //         //     />
    //         //     <Card.Title>{homeCard.name}</Card.Title>
    //         // </Card>
    //         <View
    //             style={styles.tileCard}
    //         >
    //             <Tile
    //             style={{
    //                 alignSelf: 'center',
    //             height: 250,
    //             width: 200,
    //             borderRadius: 15,
    //             paddingLeft: 300,
    //             paddingBottom: 350,
    //             margin: 203
    //         }}
    //             // title={homeCard.name}
    //             featured
    //             // onPress={() => navigation.navigate(''{ campsite })}
    //             imageSrc={shopCard.image}
    //             // titleStyle={{fontSize: 40, color: '#00ccff'}}
    //             // height={300}
    //             // width={200}
    //         />
    //     </View>
    //     );
    // }

    // return (
    //     <FlatList
    //         data={shopCard}
    //         renderItem={renderShopCardItems}
    //         keyExtractor={(item) => item.id.toString()}
    //     />
    // )

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

// const styles = StyleSheet.create({
//     tileCard: {
        // flex: 1,
        // flexWrap: 'wrap',
        // flexDirection: 'row',
        // borderRadius: 15,
        // overflow: 'hidden',
        // margin: 13,
        // width: null,
        // paddingTop: 20,
        // height: 200,
        // alignItems: 'center',
        // backgroundColor: 'orange',
        // height: 300,
        // flex: 1,
        // width: null,
    // margin: 10,
    // }
// })

export default ShopCard;