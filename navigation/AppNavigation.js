import { Image, Platform } from 'react-native'
import React from 'react'
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import HomeScreensStack from './appStacks/HomeStack';
import MessagesScreensStack from './appStacks/MessagesStack';
import { ImageUrlConstants } from '../constants/imageUrls';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: '9%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          tabBarHideOnKeyboard: true,
        }}
        initialRouteName="HomeScreensStack"
      >
        <Tab.Screen
          name="HomeScreensStack"
          options={({ route }) => ({
            headerShown: false,
            // tabBarVisible: getTabBarVisible(route),
            tabBarIcon: ({ focused }) => icon('HomeScreen', focused),
            tabBarLabel: () => { return null }
          })}
          component={HomeScreensStack}
        />
        <Tab.Screen
          name="MessagesScreensStack"
          options={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => icon('MessagesScreen', focused),
            tabBarLabel: () => { return null }
          })}
          component={MessagesScreensStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const icon = (screen, focused) => {
  let iconName = null;
  switch (screen) {
    case 'HomeScreen':
      iconName = focused
        ? ImageUrlConstants.alertTabActive
        : ImageUrlConstants.alertTab;
      break;
    case 'MessagesScreen':
      iconName = focused
        ? ImageUrlConstants.messageTabActive
        : ImageUrlConstants.messageTab;
      break;
  }

  return (
    <Image
      source={iconName}
      style={{ marginTop: Platform.OS === 'ios' ? '1.5%' : 0 }}
    />
  )
};


export default AppNavigation