import React from 'react';
import { FlatList, ActivityIndicator, View, Text } from 'react-native';
import Post from './Post';

const responseUrl = 'https://api.reddit.com/r/pics/new.json';

export default class SubredditList extends React.Component {

  state = {
    loading: true,
    dataSource: [],
    refreshing: false,
  }

  async componentDidMount(){
    await this.getApiData()
  }

  componentDidUpdate(){
    return !this.state.refreshing;
  }

  async getApiData() {
    try {
      const response = await fetch(responseUrl);
      const data = await response.json();

      this.setState({
        dataSource: data,
        refreshing: false,
        loading: false
      })

    } catch (error) {
      console.error(error);
    }
  }

  updateData = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.getApiData();
    })
  }


  render(){

    const { loading, dataSource, refreshing } = this.state;

    if(loading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View>
        <FlatList
          data = { dataSource.data.children }
          renderItem = {({ item }) => 
            <Post
              item = { item }
            />}
          keyExtractor = {(item) => item.data.id}
          refreshing = { refreshing }
          onRefresh = { this.updateData }
        />
      </View>
    );
  }
}
