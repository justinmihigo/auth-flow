import React, { useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image, TouchableHighlight, Button, Animated } from "react-native";
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'green',
    }
    
})
const Navbar=()=>{
    const opacity= useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        Animated.timing(opacity,{
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    })
    return(
        
    <Animated.View style={{opacity}}>
        <Text style={styles.title}>Mihigo</Text>
        <Image source={require('../assets/screen.png')}/>
        <TouchableHighlight>
            <Button title="Justin"/>
        </TouchableHighlight>
    </Animated.View>
    )
}
export default Navbar;

