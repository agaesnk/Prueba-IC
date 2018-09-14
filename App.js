import React from 'react';
import { View } from 'react-native';
import SubredditList from './src/components/SubredditList';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <SubredditList/>
      </View>
    );   
  }
}
