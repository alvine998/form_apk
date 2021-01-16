import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Splasher from './pages/Splash';
import Login from './pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Register from './pages/Register';
import UserScreen from './pages/Test/Test3';
import UserDetailScreen from './pages/Test/Test1';
import AddUserScreen from './pages/Test/Test2';

// const Stack = createStackNavigator();

// function MyStack() {
//   return(
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle:{
//           backgroundColor:'#621FF7',
//         },
//         headerTintColor:'#fff',
//         headerTitleStyle:{
//           fontWeight:'bold',
//         },
//       }}
//     >
//       <Stack.Screen
//        name="AddUserScreen"
//        component={AddUserScreen}
//        options={{ title: 'Add User'}} 
//       />
//       <Stack.Screen
//        name="UserScreen"
//        component={UserScreen}
//        options={{ title: 'Users List'}} 
//       />
//       <Stack.Screen
//        name="UserDetailScreen"
//        component={UserDetailScreen}
//        options={{ title: 'User Detail'}} 
//       />

//     </Stack.Navigator>
//   )
// }

export default function App() {
  return (
    // <NavigationContainer>
    //   <MyStack/>
    // </NavigationContainer>
    
    <ScrollView>
      <Register/>
    </ScrollView>
  );
}
