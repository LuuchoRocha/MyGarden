import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '@screens/HomeScreen';
import {ScreenOptions, BottomTabsOptions} from '@components/ScreenOptions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Root = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeStackScreen = () => {
  return (
    <Root.Navigator screenOptions={ScreenOptions()}>
      <Root.Screen name="Home" component={HomeScreen} />
    </Root.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName = 'airbnb';
              return <Icon name={route.name} size={size} color={color} />;
            },
          })}
          tabBarOptions={BottomTabsOptions()}>
          <BottomTab.Screen component={HomeStackScreen} name="Home" />
          <BottomTab.Screen component={HomeStackScreen} name="Second Home" />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
