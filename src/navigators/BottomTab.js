import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from '@screens/HomeStack';
import {BottomTabsOptions} from '@components/ScreenOptions';
import Icon from 'react-native-vector-icons/FontAwesome';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          return <Icon name={route.name} size={size} color={color} />;
        },
      })}
      tabBarOptions={BottomTabsOptions()}>
      <BottomTab.Screen component={HomeStackScreen} name="Home" />
      <BottomTab.Screen component={HomeStackScreen} name="Second Home" />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
