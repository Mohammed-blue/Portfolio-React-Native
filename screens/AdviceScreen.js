// import { ScrollView, Text, View} from 'react-native';
// import { useState } from 'react';

// const AdviceScreen = () => {
//     return (
//         <View>
//             <Text>Hello!</Text>
//         </View>
//     )
// }

// export default AdviceScreen;


// import { FlatList, Text, View } from 'react-native';
// import { Avatar, ListItem, Card, Tile} from 'react-native-elements';
// import { useState } from 'react';
// import AdvicesData from '../shared/AdvicesData'

// const AdviceScreen = ({ navigation }) => {

//     const [adviceCard, setAdviceCard] = useState(AdvicesData)

//     const renderAdviceItem = ({ item: adviceCard }) => {
//         return (
//             <View
//                 // style={styles.tileCard}
//             >
//                 <Tile
//                 title={adviceCard.name}
//                 featured
//                 onPress={() => navigation.navigate('AdviceInfo', { adviceCard })}
//                 imageSrc={adviceCard.image}
//                 titleStyle={{fontSize: 40, color: '#00ccff'}}
//                 // onPress={() => navigation.navigate('HIIT', { homeCard })}
//                 />
//             </View>
//         );
//     };
//     return (
//         <FlatList
//             data={adviceCard}
//             renderItem={renderAdviceItem}
//             keyExtractor={(item) => item.id.toString()}
//         />
//     );
// };

// export default AdviceScreen;




import { ScrollView, Text, View } from "react-native";
import { useState } from "react";

// I added the imports below
import { createStackNavigator } from "@react-navigation/stack";
import AdviceSubsectionOne from '../screens/subAdviceScreens/AdviceSubsectionOne';
import AdviceSubsectionTwo from '../screens/subAdviceScreens/AdviceSubsectionTwo';
import {Button} from 'react-native-elements';


// I added in {navigation}
const AdviceScreen = ({navigation}) => {
  const Stack = createStackNavigator();

  // Insert any desired screen options here
  const screenOptions = {};

  return (
    <>
    {/* // This Stack navigator is being called as a component for another Stack.Screen
    // on MainComponent. Basically this whole navigator should be shown as a screen
    // inside the other MAIN navigator */}
    <Button
        onPress={() => navigation.navigate("AdviceSubsectionOne")}
        title="Go to first subsection"
    />
    <Button
    onPress={() => navigation.navigate("AdviceSubsectionTwo")}
    title="Go to second subsection"
/>
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName="AdviceSubsectionOne"
    >

    {/* This is our first "sub" advice screen */}
      <Stack.Screen
        name="AdviceSubsectionOne"
        component={AdviceSubsectionOne}

        // Other options may be desired. For example, the code to have an icon
        // that lets you go back a screen could be added, like in your MainComponent
      />
            <Stack.Screen
        name="AdviceSubsectionTwo"
        component={AdviceSubsectionTwo}

        // Other options may be desired. For example, the code to have an icon
        // that lets you go back a screen could be added, like in your MainComponent
      />

    </Stack.Navigator>
    </>
  );
};

export default AdviceScreen;
