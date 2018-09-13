import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moment from 'moment';

export default class App extends React.Component {
  render() {

    const item = this.props;
    const relativeDate = Moment(item.data.created_utc).fromNow();
    const postTitle = item.data.title;
    const postImage = item.data.thumbernails;
    const postAuthor = item.data.author;
    const postScore = item.data.score;
    const postComments = item.data.comments;

    return (
      <View style={styles.mainContainer}>
        <image source = {{uri: postImage}}/>
        <View style={styles.Container}>
          <Text>{ relativeDate }</Text>
          <Text>{ postTitle }</Text>
          <View style={styles.subContainer}>
            <Text>Author: { postAuthor }</Text>
            <Text>Score: { postScore }</Text>
            <Text>Comments: { postComments }</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
