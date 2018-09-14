import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5
  },
  image: {
    height:90,
    width: 90
  }, 
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10
  },
  date: {
    alignSelf: 'flex-end',
    fontSize:11
  },
  title: {
    fontSize:14,
    fontWeight: '500'
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize:11
  }
})