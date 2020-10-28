import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, StatusBar, useColorScheme} from 'react-native';
import {LightTheme, DarkTheme} from './src/themes';

const App: () => React$Node = () => {
  const scheme = useColorScheme();

  return (
    <>
      <StatusBar
        barStyle={
          scheme === 'dark'
            ? DarkTheme.statusBar.content
            : LightTheme.statusBar.content
        }
        backgroundColor={
          scheme === 'dark'
            ? DarkTheme.statusBar.backgroundColor
            : LightTheme.statusBar.backgroundColor
        }
      />
      <SafeAreaView>
        <ScrollView
          style={[
            styles.main,
            {
              backgroundColor:
                scheme === 'dark'
                  ? DarkTheme.statusBar.backgroundColor
                  : LightTheme.statusBar.backgroundColor,
            },
          ]}
          contentInsetAdjustmentBehavior="automatic"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },
});

export default App;
