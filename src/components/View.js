import React from 'react';
import {View as RNView} from 'react-native';
import StyledComponent from '@components/StyledComponent';

const View = ({theme, ...props}) => {
  return (
    <RNView style={[{backgroundColor: theme.colors.background}, props.style]}>{props.children}</RNView>
  );
};

export default StyledComponent(View);
