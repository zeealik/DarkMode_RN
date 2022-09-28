import React from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { Provider as PaperUIProvider } from 'react-native-paper';
import ScreenNavigation from './navigation/Navigation';
// local imports
import { theme } from './theme';

const App = () => {
  const scheme = useColorScheme();

  return (
    <PaperUIProvider theme={scheme === 'light' ? theme : theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenNavigation />
      </SafeAreaView>
    </PaperUIProvider>

  );
};

export default App;
