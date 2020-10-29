import React from 'react';
import {useColorScheme} from 'react-native';
import LightTheme from '@themes/LightTheme';
import DarkTheme from '@themes/DarkTheme';

const Styled = (Component) => {
  const StyledComponent = (props) => {
    const scheme = useColorScheme();

    return (
      <Component
        {...props}
        theme={scheme === 'dark' ? DarkTheme : LightTheme}
      />
    );
  };

  return StyledComponent;
};

export default Styled;
