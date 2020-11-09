import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenOptions} from '@components/ScreenOptions';
import HomeScreen from '@screens/HomeScreen';

const Root = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <Root.Navigator screenOptions={ScreenOptions()}>
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>
  );
};

export default HomeStackScreen;
