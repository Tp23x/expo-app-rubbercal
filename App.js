import { NavigationAction, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as Svg from 'react-native-svg';

import Home from './src/Home';
import Nextscreen from './src/Nextscreen';
import Header from './src/Header';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        // options={{ 
        //   title:
        //    <Image
        //      style={{ width: 200, height: 50 }}
        //      source={require('./src/img/sun-tornado.png')}
        //      //resizeMode='contain'
        //    />
        //  }}

        // options={{
        //   headerTitle: () => <Header name="คำนวณน้ำยาง" />,
        //   headerStyle: {
        //     height: 180,
        //     borderBottomLeftRadius: 30,
        //     borderBottomRightRadius: 30,
        //     backgroundColor: '#7FB3D5',
        //     //shadowColor: '#000',
        //     //elevation: 25,
        //   },
        //   // headerBackground: () => (
        //   //   <Image
        //   //     style={StyleSheet.absoluteFill}
        //   //     source={require('./src/img/sun-tornado1.png')}
        //   //   />
        //   // ),
        //   // headerBackground: () => (
        //   //   <Image
        //   //     style={StyleSheet.absoluteFill}
        //   //     source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
        //   //   />
        //   // ),
         
        // }}
      >
      </Stack.Screen>

      <Stack.Screen
        name="Next"
        component={Nextscreen}
      >

      </Stack.Screen>
    </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
