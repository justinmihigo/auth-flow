import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useNavigation } from "@react-navigation/native";

const Forgot: React.FC = () => {
    const navigation = useNavigation();
    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold
    })
    if (!fontsLoad) return null;
    return (
        <View style={styles.cont}>
            <Text style={[styles.container]} >Forgot Password</Text>
            <Text style={{fontFamily:'Poppins_400Regular', margin: 10, color:'#941ECA', textAlign:'center'} }>Don't worry everyone forgets we're going to take care of it</Text>
            <TextInput 
            placeholder="Enter your email or username" placeholderTextColor={'#941ECA'} style={styles.inputs} selectionColor={'black'}></TextInput>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Reset" as never)}>
                <Text style={styles.textColor}>Send</Text>
            </Pressable>    
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Poppins_400Regular',
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
        gap: 20,
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
export default Forgot;