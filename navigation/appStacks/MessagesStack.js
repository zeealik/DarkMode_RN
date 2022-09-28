import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { StyleSheet } from 'react-native';
import Messages from '../../Screens/Messages/Messages';

const MessagesScreensStack = () => {
   const Stack = createNativeStackNavigator();

   return (
      <Stack.Navigator
         initialRouteName="MessagesScreen"
         options={{
            headerShown: false,
         }}>
         <Stack.Screen
            name="MessagesScreen"
            component={Messages}
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

export default MessagesScreensStack