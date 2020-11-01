import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import StyledComponent from '@components/StyledComponent';

const ActivityIndicator = ({theme, ...props}) => {
  return <RNActivityIndicator color={theme.colors.text} {...props} />;
};

export default StyledComponent(ActivityIndicator);
