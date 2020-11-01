import {useColorScheme} from 'react-native';
import LightTheme from '@themes/LightTheme';
import DarkTheme from '@themes/DarkTheme';

const ScreenOptions = (options = {title: 'My Garden'}) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return {
    headerTitleStyle: {fontWeight: 'bold'},
    headerTintColor: theme.colors.text,
    headerStyle: {
      backgroundColor: theme.colors.header,
    },
    ...options,
  };
};

export default ScreenOptions;
