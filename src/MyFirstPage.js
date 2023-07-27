import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MyFirstPage = () => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.text}>MyFirstPage</Text>
    </View>
  );
};

export default MyFirstPage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 28,
  },
});
