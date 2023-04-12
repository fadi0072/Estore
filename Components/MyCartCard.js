import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import GlobalColors from '../utils/GlobalColors';
export default function MyCartCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {<Image style={styles.imgNoti} source={{uri: props.ImageUri}}></Image>}
        <View style={{flexDirection: 'column'}}>
          {<Text style={styles.hidingH1}>{props.cardLabel}</Text>}
          {<Text style={[styles.text1]}>{props.Notificationdesc}</Text>}
          {
            <Text style={[styles.text1, {paddingTop: 10}]}>
              {props.Datelabel}
            </Text>
          }
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderTopColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: 2,
    borderColor: 'gray',
    borderTopColor: 'transparent',
    borderWidth: 0.5,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  text1: {
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    color: '#6E6E6E',
  },
  hidingH1: {
    color: '#51AB1D',
    fontFamily: 'Poppins_500Medium',
    padding: 10,
    fontSize: 14,
  },
  imgNoti: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
});
