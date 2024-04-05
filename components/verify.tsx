import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Verify: React.FC = () => {
    const [fontsLoad] = useFonts({
        Poppins_400Regular, Poppins_700Bold
    })
    if (!fontsLoad) return null;
    return (
        <View style={styles.cont}>
            <Text style={[styles.container]} >Verifying if it's you</Text>
            <View style={styles.viewIcons}>
            <TextInput style={styles.inputs} selectionColor={'black'}/>
            <TextInput style={styles.inputs} selectionColor={'black'}/>
            <TextInput style={styles.inputs} selectionColor={'black'}/>
            <TextInput style={styles.inputs} selectionColor={'black'}/>
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.textColor}>Verify</Text>
            </Pressable>
            <View>
            <Text style={{fontFamily:'Poppins_400Regular', color:'#621486', textAlign:'center', padding:10}}> 4:00 remaining</Text>
            <Text style={{fontFamily:'Poppins_400Regular', color:'#621486'}}> Resend verification code</Text>
                </View>            
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
        color: '#941ECA',
        marginBottom: 20,
        fontFamily: 'Poppins_700Bold',
    },
    inputs: {
        width: 60,
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
        width: '90%',
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
export default Verify;