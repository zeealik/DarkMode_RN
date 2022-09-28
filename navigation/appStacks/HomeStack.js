import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet } from 'react-native';
import Home from '../../Screens/Home/Home';

const HomeScreensStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         initialRouteName="HomeScreen"
         options={{
            headerShown: false,
         }}>
         <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
               headerTransparent: true,
               headerTintColor: '#fff',
               headerTitleAlign: 'center',
               headerStyle: styles.header,
               headerShadowVisible: false,
               headerShown: false
            }}
         />
      </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   header: {
      borderBottomWidth: 1,
      borderBottomColor: '#343434',
   }
})

export default HomeScreensStack