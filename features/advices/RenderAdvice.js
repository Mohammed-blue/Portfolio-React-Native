import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import SelfcareData from '../../shared/SelfcareData';
import { useState } from 'react'

const RenderAdvice = ({ adviceCard }) => {
    const [selfcareCards, setSelfcareCards] = useState(SelfcareData)

    if(adviceCard) {
        return (
            <>
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={adviceCard.image}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {adviceCard.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text>Hi</Text>
            </Card>
            </>
        );
        }
    return <View />;
};

export default RenderAdvice;



// {
//     selfcareCards.map((card) => {
//         // console.log(card.name);
//     return (
//         <>
//         <Card containerStyle={{ padding: 0 }}>
//             <Card.Image source={card.image}>
//                 <View style={{ justifyContent: 'center', flex: 1 }}>
//                     <Text
//                         style={{
//                             color: 'white',
//                             textAlign: 'center',
//                             fontSize: 20
//                         }}
//                     >
//                         {card.name}
//                     </Text>
//                 </View>
//             </Card.Image>
//             <Text>Hi</Text>
//         </Card>
//         </>
//     );
//     })
// }
// return <View />;
// };