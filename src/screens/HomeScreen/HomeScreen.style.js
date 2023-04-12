import {StyleSheet} from 'react-native';
import GlobalColors from '../../../utils/GlobalColors';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe713',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    paddingTop: '12%',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    paddingBottom: '2.2%',
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  imageContainer: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  imageContainerFull: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 30,
    flex: 1,
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  indicator: {
    height: 10,
    width: 30,
    backgroundColor: GlobalColors.gold,
    marginHorizontal: 3,
    borderRadius: 20,
  },
  modalView: {
    width: '85%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,
  },

  sliderImgM: {
    height: '35%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    width: '100%',
  },
  imgview: {
    alignContent: 'center',
    alignItems: 'center',
  },
  centeredview: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#00000099',
  },

  home_txt: {
    fontSize: 20,
    marginTop: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttons_row: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  cardviews: {
    height: 120,
    width: 110,
    borderWidth: 0.5,
    backgroundColor: '#f5eeed',
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10,
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  gridStyle: {
    flexDirection: 'column',
    borderWidth: 1.5,
    borderColor: '#E4E9F3',
    borderRadius: 6,
    height: 130,
    width: '28%',
    alignItems: 'center',
    margin: 10,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonOpacity: {
    margin: 10,
    width: '95%',
    height: 60,
    borderWidth: 1.5,
    borderColor: '#E4E9F3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridText: {
    paddingTop: 10,
    fontSize: 10,
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
  },
  ListText: {
    fontSize: 15,
    paddingLeft: '10%',
    fontFamily: 'Poppins_600SemiBold',
    color: 'black',
  },
  ListImg: {
    margin: 25,
  },
  gridImg: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: 44,
    width: 46,
  },
  mainGrid: {
    flexDirection: 'column',
    flex: 1,
    marginTop: '2%',
  },
  gridView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    //justifyContent:"space-around"
  },
  gridInnerView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    //justifyContent:"space-around"
  },
  gridStyleRow: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  HTrecycleImg: {
    width: 46,
    height: 43.63,
  },
  rewardImg: {
    width: 40,
    height: 46,
  },
  historyImg: {
    width: 46,
    height: 46,
  },
  RecycleOrderImg: {
    width: 38.16,
    height: 46,
  },
  ListStyleView: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  RecycleListImg: {
    width: 29,
    height: 27,
    marginLeft: '10%',
  },
  HTrecycleImgList: {
    width: 29,
    height: 27,
    marginLeft: '10%',
  },
  RewardListImg: {
    width: 29,
    height: 33,
    marginLeft: '10%',
  },
  HistorylistImg: {
    width: 29,
    height: 29,
    marginLeft: '10%',
  },
  RecycleOrderListImg: {
    width: 27.58,
    height: 33.25,
    marginLeft: '10%',
  },
  indicatorContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ToggleImg: {
    width: 22,
    height: 22,
  },
  ToggleView: {
    flexDirection: 'row',
    marginHorizontal: '4.5%',
    justifyContent: 'flex-end',
    marginTop: '4%',
  },

  contentContainer: {
    height: height * 0.95,
  },
});
