import React, { Component, components } from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default class Splash extends Component{
    render(){
        return(
            <View style ={style.container}>
                <Text style = {StyleSheet.title}></Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'while',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontWeight :'bold',
        fontSize:20,
    }
})