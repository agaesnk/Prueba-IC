import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:100,
    width: 100
  }, 
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  date: {
    alignSelf: 'flex-end'
  },
  title: {
    fontSize:20,
    fontWeight: '500'
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})