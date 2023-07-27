import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MyFirstPage from './src/MyFirstPage';

const App = () => {
  return (
    <SafeAreaView style={styles.rootContainer}>
      <MyFirstPage />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
});
