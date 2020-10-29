import React from 'react';
import {Text as RNText} from 'react-native';
import StyledComponent from '@components/StyledComponent';

const Text = ({theme, ...props}) => {
  return (
    <RNText style={[{color: theme.colors.text}, props.style]}>{props.children}</RNText>
  );
};

export default StyledComponent(Text);
