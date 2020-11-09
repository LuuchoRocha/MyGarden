import {useColorScheme} from 'react-native';
import LightTheme from '@themes/LightTheme';
import DarkTheme from '@themes/DarkTheme';

const ScreenOptions = (options = {title: 'My Garden'}) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return {
    headerTitleStyle: {fontWeight: 'bold'},
    headerTintColor: theme.colors.headerText,
    headerStyle: {
      backgroundColor: theme.colors.header,
    },
    ...options,
  };
};

const BottomTabsOptions = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return {
    activeTintColor: theme.colors.text,
    inactiveTintColor: theme.colors.text,
    activeBackgroundColor: theme.colors.header,
    inactiveBackgroundColor: theme.colors.header,
    showLabel: false,
    style: {
      borderTopWidth: 0,
      elevation: 8,
    },
  };
};

export {ScreenOptions, BottomTabsOptions};
