import React from 'react';
import {StatusBar as RNStatusBar} from 'react-native';
import StyledComponent from '@components/StyledComponent';

const StatusBar = ({theme}) => {
  return (
    <RNStatusBar
      barStyle={theme.statusBarStyle}
      backgroundColor={theme.colors.background}
    />
  );
};

export default StyledComponent(StatusBar);
