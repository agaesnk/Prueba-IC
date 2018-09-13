import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Post from './Post';

const responseUrl = 'https://api.reddit.com/r/pics/new.json';

export default class SubredditList extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource: []
    }
  }

  componentDidMount(){
    return fetch(responseUrl)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.new,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <Text>Loading posts...</Text>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={dataSource.data.children}
          renderItem={({item}) => 
            <Post
              item = { item }
            />}
          keyExtractor={(item) => item.data.id}
        />
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
