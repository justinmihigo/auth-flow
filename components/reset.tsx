import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';


const Reset: React.FC = () => {
    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold
    })
    if (!fontsLoad) return null;
    return (
        <View style={styles.cont}>
            <Text style={[styles.container]} >Reset Password</Text>
            <TextInput 
            placeholder="New password" placeholderTextColor={'#941ECA'} style={styles.inputs} selectionColor={'black'}></TextInput>
            <View>
                <Text style={styles.validate}>The password must have at least 8 characters</Text>
                <Text style={styles.validate}>The password should contain a number</Text>
                <Text style={styles.validate}>The password should contain a special character</Text>
            </View>
            <TextInput placeholder="Confirm password" placeholderTextColor={'#941ECA'} style={styles.inputs} selectionColor={'black'}></TextInput>
            <Pressable style={styles.button}>
                <Text style={styles.textColor}>Submit</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Poppins_400Regular',
    },
    validate:{
        color: 'green',
        fontSize: 12,
        margin: 10,
        fontFamily: 'Poppins_400Regular',
    },
    container: {
        textAlign: "center",
        justifyContent: 'center',
        fontSize: 30,
        color: '#941ECA',
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
    viewIcons:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
        gap: 20,
    },
    box:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#941ECA',
        borderRadius: 10,
        padding: 10,
        backgroundColor:'beige',
    }
})
export default Reset;