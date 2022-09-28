import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
    gThin: {
      fontFamily: 'VVE-Giallo-Thin',
    },
    gLight: {
      fontFamily: 'VVE-Giallo-Light',
    },
    gBold: {
      fontFamily: 'VVE-Giallo-Bold',
    }
  },
  android: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Poppins-Bold',
      fontWeight: 'normal',
    },
    gThin: {
      fontFamily: 'VVE-Giallo-Thin',
    },
    gLight: {
      fontFamily: 'VVE-Giallo-Light',
    },
    gBold: {
      fontFamily: 'VVE-Giallo-Bold',
    },
  },
};

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#00C4FF',
    primaryTextColor: '#1E2661',
    black: '#343434',
    secondary: '#414757',
    white: '#ffffff',
    error: '#f13a59',
    grey: '#9E9E9E',
    greyPlaceholder:'#9CA3AF',
    border: '#EEEEEE',
    inputBg: '#FAFAFA',
    redFocus: '#F386A1',
    deleteBg: '#F8A5A5',
    redBtnBg: '#EA3360',
    transparentBlue: '#F2FCFF',
  },
};
