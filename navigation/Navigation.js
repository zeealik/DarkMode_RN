import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// local inports
import SplashScreen from '../Screens/SplashScreen';
import AppNavigation from './AppNavigation';

function ScreenNavigation() {
   const [splashShow, setSplashShow] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setSplashShow(false);
      }, 1500);
   }, []);

   return (
      splashShow ? <SplashScreen /> :
         <AppNavigation />
   );
}


export default ScreenNavigation;
