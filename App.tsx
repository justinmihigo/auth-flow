import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navbar from './components/navbar';
import Inputs from './components/inputs';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
        <stack.Screen name="Login" component={Inputs}></stack.Screen>
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
