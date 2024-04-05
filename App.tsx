import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Verify from './components/verify';
import Forgot from './components/forgot';
import Reset from './components/reset';
const stack= createStackNavigator();
export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <View style={styles.imageContainer}>
  //       <Image source={require('./assets/logo.png')}  resizeMode="contain" />
  //     </View>
  //     <Inputs />
  //     {/* <Navbar/>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" /> */}
  //   </View>
  // );
 
  return(
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="Signup" component={Signup}></stack.Screen>
      <stack.Screen name="Login" component={Login}></stack.Screen>
        <stack.Screen name="Reset" component={Reset}></stack.Screen>
        <stack.Screen name="Forgot" component={Forgot}></stack.Screen>
        <stack.Screen name="Verify" component={Verify}></stack.Screen>
        
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    gap: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },

});
