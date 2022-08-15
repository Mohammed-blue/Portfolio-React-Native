import { Image, Text, Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
// import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import logo from '../assets/images/HygieiaFitnessLogo.png'
import HomeScreen from './HomeScreen';
import HfCards from '../features/HfCard/HfCards';
import AdviceScreen from './AdviceScreen';
import BusinessScreen from './BusinessScreen';
import SuccessScreen from './SuccessScreen';
import ShopScreen from './ShopScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AdviceInfoScreen from './AdviceInfoScreen';
// import HiitCardComponent from '../components/HiitCardComponent'
import Workout from '../components/Workout'


const Drawer = createDrawerNavigator()

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#f53803'}
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={screenOptions}
            initialRouteName='HomeScreen'
        >
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='Workout'
                component={Workout}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                            // onPress={() => navigation.navigate(HIIT)}
                        />
                    )
                })}
            />
            {/* <Stack.Screen
                name=
            /> */}
        </Stack.Navigator>
    )
}

const AdviceNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Advice'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Advice'
                component={AdviceScreen}
                options={({ navigation }) => ({
                    title: 'Advice',
                    headerLeft: () => (
                        <Icon
                            name='lightbulb'
                            type='font-awesome5'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            {/* <Stack.Screen
                name='AdviceInfo'
                component={AdviceInfoScreen}
                option={({ route }) => ({
                    title: route.params.advice.name
                })}
            /> */}

        </Stack.Navigator>
    )
}

const BusinessNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Advice'
                component={BusinessScreen}
                options={({ navigation }) => ({
                    title: 'Business',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const SuccessNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Success'
                component={SuccessScreen}
                options={({ navigation }) => ({
                    title: 'Success',
                    headerLeft: () => (
                        <Icon
                            name='check-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const ShopNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Shop'
                component={ShopScreen}
                options={({ navigation }) => ({
                    title: 'Shop',
                    headerLeft: () => (
                        <Icon
                            name='shopping-basket'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}


const LoginNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={({ navigation }) => ({
                    title: 'Login',
                    headerLeft: () => (
                        <Icon
                            name='user-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const SignupNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: 'Signup',
                    headerLeft: () => (
                        <Icon
                            name='adduser'
                            type='ant-design'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}


const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={logo} style={styles.drawerImage} />
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
)

const Main = () => {
    return (
        <View style={{
            flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}>
            <Drawer.Navigator
                initialRouteName='Home'
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: 'hsl(19, 800%, 90%)' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Advice'
                    component={AdviceNavigator}
                    options={{
                        title: 'Advice',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='lightbulb'
                                type='font-awesome5'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Business'
                    component={BusinessNavigator}
                    options={{
                        title: 'Business',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Success'
                    component={SuccessNavigator}
                    options={{
                        title: 'Success',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='check-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Shop'
                    component={ShopNavigator}
                    options={{
                        title: 'Shop',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='shopping-basket'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Login'
                    component={LoginNavigator}
                    options={{
                        title: 'Login',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='user-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Signup'
                    component={SignupNavigator}
                    options={{
                        title: 'Signup',
                        drawerIcon:({ color }) => (
                            <Icon
                                name='adduser'
                                type='ant-design'
                                size={24}
                                iconStyle={{ width: 24}}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    drawerHeader: {
        backgroundColor:'#f53803',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'

    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 0.5,
        height: '100%',
        width: '100%',
        // backgroundSize: 'cover'
    }
})

export default Main;