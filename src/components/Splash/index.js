import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';

export default class Splash extends Component {
    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
                <Text style={styles.text}>Hello Splash</Text>
                <ActivityIndicator color={'white'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#34495e',
    },
    text:{
        color:'white',
        fontSize:18
    }
})