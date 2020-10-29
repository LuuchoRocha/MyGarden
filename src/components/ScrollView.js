import React from 'react';
import {ScrollView as RNScrollView} from 'react-native';
import StyledComponent from '@components/StyledComponent';

const ScrollView = ({theme, ...props}) => {
  return (
    <RNScrollView
      {...props}
      style={[{backgroundColor: theme.colors.background}, props.style]}>
      {props.children}
    </RNScrollView>
  );
};

export default StyledComponent(ScrollView);
