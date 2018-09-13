import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubredditList from './src/components/SubredditList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SubredditList/>
        {/* <Text>Hello Andrea!</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});