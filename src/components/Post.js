import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import Moment from 'moment';
import styles from './styles';

export default class Post extends React.Component {
  render() {

    const redditURL = 'https://www.reddit.com';

    const { item } = this.props;
    const relativeDate = Moment(item.data.created_utc * 1000).fromNow();
    const postTitle = item.data.title;
    const postImage = item.data.thumbnail;
    const postAuthor = item.data.author;
    const postScore = item.data.score;
    const postComments = item.data.num_comments;
    const postUrl = redditURL + item.data.permalink;

 
    return (
      <View>
        <TouchableOpacity onPress={() => Linking.openURL(postUrl)}>
          <View style={styles.mainContainer}>
            <Image source = {{uri: postImage}} style = { styles.image }/>
            <View style={styles.container}>
              <Text style = {styles.date}>{ relativeDate }</Text>
              <Text style = {styles.title}>{ postTitle }</Text>
              <View style={styles.subContainer}>
                <Text style = {styles.text}>by { postAuthor }</Text>
                <Text style = {styles.text}>{ postScore } points</Text>
                <Text style = {styles.text}>{ postComments } comments</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

