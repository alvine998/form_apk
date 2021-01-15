import React, { Component } from 'react'
import { View, Text } from 'react-native';
import Splash from "../../components/Splash";
import Intro from "../Intro";

export default class Splasher extends Component {
    constructor(){
        super();
        this.state = {
            timer: 0
        };
        setInterval(() => {
            this.setState({timer: this.state.timer + 1})
        }, 1000);
    }

    render(){
        return(
            <View>
                <Text>Wihhhhh</Text>
            </View>
        );
    }
}