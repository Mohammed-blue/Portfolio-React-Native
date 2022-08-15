import { ScrollView, Text, View} from 'react-native';
// import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { Card, Button, Icon }from 'react-native-elements';


const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text style={{margin: 10}}>“To enhance the quality of life in the communities, we serve through our fitness philosophy, facilities, programs, and products and to instill in the lives of people everywhere the value of health and fitness.”</Text>
        </Card>
    )
}

const ContactInfo = () => {
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['hygieiafitness@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

    return (
        <ScrollView>

                <Card wrapperStyle={{margin: 10}}>
                    <Card.Title>
                        Contact Information
                    </Card.Title>
                    <Card.Divider />
                    <Text>main St.</Text>
                    <Text>Sunrise, FL 75048</Text>
                    <Text style={{marginBottom: 10}}>U.S.A.</Text>
                    <Text>Phone: +1-206-555-1234</Text>
                    <Text>Email: hygieiafitness@gmail.com</Text>
                    <Button
                        title='Send Email'
                        buttonStyle={{ backgroundColor: '#00ccff', marginTop: 40 }}
                        icon={
                            <Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{ marginRight: 10 }}
                                onPress={() => sendMail()}
                            />
                        }
                    />
                </Card>
        </ScrollView>
    )
}

const BusinessScreen = () => {
    return (
        <ScrollView>
            <Animatable.View
                animation="fadeInDown"
                duration={2000}
                delay={1000}
            >
                <Mission />
                <ContactInfo/>
            </Animatable.View>
        </ScrollView>
    )
}

export default BusinessScreen;