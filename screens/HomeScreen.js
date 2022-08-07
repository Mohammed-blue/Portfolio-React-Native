import { ScrollView, Text, View, SafeAreaView, StyleSheet} from 'react-native';
// import {useState } from 'react';
import CarouselCards from '../features/carouselCard/CarouselCards'
import carouselData from '../shared/carouselData'
import HfCard from '../features/HfCard/HfCards'

const HomeScreen = () => {
    return (
        <View>
            <CarouselCards data={carouselData} />
            <HfCard />
        </View>
    )
}


export default HomeScreen;