import React from 'react';
import { ScrollView, TextInput, Text,SafeAreaView, StyleSheet, ImageBackground, Dimensions, View } from 'react-native';
import { Button } from '@rneui/themed';
import { useState } from 'react';
import { Icon, ListItem, SocialIcon } from 'react-native-elements';
import BackgroundLogo from '../assets/images/background-img.png'

const SignupScreen = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [confirmNumber, onChangeConfirmNumber] = useState(null);

    return (
        <ScrollView
            style={{flex: 1, backgroundColor: '#fff'}}
            showsVerticalScrollIndicator={false}
        >
            {/* Brand View */}
            <ImageBackground
                source={BackgroundLogo}
                style={{ height: Dimensions.get('window').height / 2.5, alignSelf: 'center',
                width: 400,
                }}
            >
                <View style={styles.brandView}>
                    <Text style={styles.brandViewText}>Hygieia Fitness</Text>
                </View>
            </ImageBackground>
            {/* Bottom View */}
            <View style={styles.bottomView}>
                {/* Welcome View */}
                <View style={{padding: 40}}>
                    <Text style={{color: '#00ccff', fontSize: 34}}>Welcome</Text>
                    <Text>
                        Don't have an account?
                        <Text style={{color: 'red', fontStyle: 'italic'}}>
                        {' '}
                        Register now</Text>
                    </Text>
                    {/* Form Input View */}
                    <View style={{marginTop: 50}}>
                        <SafeAreaView>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Enter valid email address"
                                onChangeText={onChangeText}
                                value={text}
                                keyboardType='email-address'
                            />
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChangeNumber}
                                value={number}
                                placeholder="Enter valid password"
                                keyboardType="numeric"
                                secureTextEntry={true}
                            />
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChangeConfirmNumber}
                                value={confirmNumber}
                                placeholder="Confirm Password"
                                keyboardType="numeric"
                                secureTextEntry={true}
                            />
                        </SafeAreaView>
                    </View>
                        {/* Login Button & Social Media Icons */}
                        <View
                            style={{
                                height: 100,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                        >
                            <Button
                                title="Sign up"
                                icon={{
                                    name: 'user',
                                    type: 'font-awesome',
                                    size: 15,
                                    color: 'white',
                                }}
                                iconRight
                                iconContainerStyle={{ marginLeft: 10 }}
                                titleStyle={{ fontWeight: '700' }}
                                buttonStyle={{
                                    backgroundColor: '#00ccff',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    borderRadius: 0,
                                }}
                                containerStyle={{
                                    width: 200,
                                    marginHorizontal: 50,
                                    marginVertical: 10,
                                    borderRadius: 30,
                                    shadowOffset: { width: 1, higher: 18},
                                    shadowOpacity: 0.7,
                                    shadowRadius: 50,
                                    elevation: 9,
                                }}
                            />
                        </View>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: 'center'}}>or Login With</Text>
                        {/* Social Medial Buttons View */}
                        <View style={styles.socialLoginView}>
                            <Button
                                icon={{
                                    name: 'google',
                                    type: 'font-awesome',
                                    size: 35,
                                    color: 'white',
                                }}
                                buttonStyle={{
                                    backgroundColor: 'rgba(255, 0, 0, 0.8)',
                                    borderColor: 'transparent',
                                    borderWidth: 0,
                                    borderRadius: 0,
                                }}
                                containerStyle={{
                                    borderRadius: 100,
                                    width: 64,
                                    marginHorizontal: 50,
                                    marginVertical: 20,
                                    shadowOffset: { width: 1, higher: 10},
                                    shadowOpacity: 0.7,
                                    shadowRadius: 3,
                                    elevation: 9,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    brandView: {
        flex: 0.4,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    brandViewText: {
        color: 'rgba(249, 105, 40, 0.8)',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'

    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
    },
    socialLoginView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 20
    },
})

export default SignupScreen;