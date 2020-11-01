import React from 'react';
import {StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import StatusBar from '@components/StatusBar';
import View from '@components/View';
import Text from '@components/Text';

const HomeScreen = (props) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.main}>
        <Text style={styles.text}>Hello there!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
