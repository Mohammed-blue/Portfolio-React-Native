import { ScrollView, Text, View} from 'react-native';
import { Avatar, ListItem, Card, Image } from 'react-native-elements';
import { useState } from 'react';
import successData from '../shared/successData';

const SuccessScreen = () => {
    const [successStories, setSuccessStory] = useState(successData)

    return (
        <ScrollView>
            <Card>
                {successStories.map((successStory) => {
                    return (
                        // <ListItem key={successStory.id}>
                        //     <Image>{successStory.image}</Image>
                        //     <ListItem.Content>
                        //         <ListItem.Title>{successStory.title}</ListItem.Title>
                        //         <ListItem.Subtitle>{successStory.description}</ListItem.Subtitle>
                        //     </ListItem.Content>
                        // </ListItem>

                        <Card key={successStory.id}>
                            <Card.Image source={successStory.image}
                            style={{height: 230, width: 270}}/>
                            <Card.Title>{successStory.title}</Card.Title>
                            <Text>{successStory.description}</Text>
                        </Card>

                    )
                }
                )}
            </Card>
        </ScrollView>
    )
}

export default SuccessScreen;