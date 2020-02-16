import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text} from 'react-native-elements';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

        render() {
            return (
                <ScrollView> 
                     <Card title = "Contact Information"
                        wrapperStyle={{margin: 10}}>
                            <Text> 1 Nucamp Way </Text>
                            <Text> Seattle, WA 98001 </Text>
                            <Text> U.S.A. </Text>
                            <Text> </Text>
                            <Text> Phone: 1-206-555-1234 </Text>
                            <Text> Email: campsites@nucamp.co </Text>
            </Card>
                </ScrollView>
            );
        }
    }

    export default Contact;