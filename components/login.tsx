import React, { useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Image, TargetedEvent } from "react-native"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from "@react-navigation/native";

library.add(faGoogle, faFacebook, faApple);
const Login: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold
    })
    if (!fontsLoad) return null;
    return (
        <View style={styles.cont}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/logo.png')} resizeMode="contain" />
            </View>
            <Text style={[styles.container]}> Login</Text>
            <TextInput
                placeholder="Enter your email or username" placeholderTextColor={'#941ECA'} style={styles.inputs} selectionColor={'black'}></TextInput>
            <TextInput placeholder="Enter your password" placeholderTextColor={'#941ECA'} style={styles.inputs} selectionColor={'black'}></TextInput>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Verify" as never)}>
                <Text style={styles.textColor}>Login</Text>
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate('Forgot' as never)}>
                <Text style={{ fontFamily: 'Poppins_400Regular', color: '#621486' }}> Forgot Password ?</Text>
            </TouchableOpacity>
            <Text style={{ borderBottomWidth: 0.3, borderColor: 'black', width: '80%' }}></Text>
            <View style={styles.viewIcons}>
                <Text style={styles.box}>
                    <FontAwesomeIcon icon={faGoogle} size={30} color="red" />
                </Text>
                <Text style={styles.box}>
                    <FontAwesomeIcon icon={faFacebook} color='blue' size={30} />
                </Text>
                <Text style={styles.box}>
                    <FontAwesomeIcon icon={faApple} size={30} />
                </Text>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins_400Regular',
    },
    container: {
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 30,
        color: '#621486',
        marginBottom: 20,
        fontFamily: 'Poppins_700Bold',
    },
    inputs: {
        width: '90%',
        height: 60,
        borderWidth: 1,
        borderColor: '#941ECA',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
    },
    textColor: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        margin: 10,
        fontFamily: 'Poppins_700Bold',
    },
    button: {
        width: '90%',
        height: 60,
        backgroundColor: '#941ECA',
        borderRadius: 10,
        padding: 10,
        marginTop: 30,
        marginBottom: 30,
    },
    cont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontFamily: 'Poppins_400Regular',
    },
    viewIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        gap: 20,
    },
    box: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#941ECA',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'beige',
    },
    // container: {
    //     paddingTop: 30,
    //     backgroundColor: '#fff',
    //     gap: 50,
    //   },
      imageContainer: {
        alignItems: 'center',
      },
    

})
export default Login;