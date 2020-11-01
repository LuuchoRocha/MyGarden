import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from '@screens/HomeScreen';
import ScreenOptions from '@components/ScreenOptions';

const Root = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root.Navigator screenOptions={ScreenOptions()}>
          <Root.Screen name="Home" component={HomeScreen} />
        </Root.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
