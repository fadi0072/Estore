import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from './MyCart.style';
import MyAdCard from '../../../Components/MyAdCard';
import MyCartCard from '../../../Components/MyCartCard';

const MyCart = () => {
  const [modalCalimReward, setModalClaimReward] = useState(false);
  const [modalGlass, setmodalGlass] = useState(false);
  const [modalPlastic, setmodalPlastic] = useState(false);
  const [modalCans, setmodalCans] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backStyle}
          onPress={() =>
            navigation.navigate('BottomTabNavigation', {screen: 'HomeScreen'})
          }>
          <Image source={require('../../../assets/backIcon.png')} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>MY Cart</Text>
        <View style={{width: 30, height: 30}} />
      </View>
      <View>
        {/* <Text style={styles.headerh2}>{strings.PRODUCTSWITH}</Text> */}
      </View>
      <View style={styles.contant}>
        <ScrollView
          style={[styles.contant, {backgroundColor: 'white', marginTop: 6}]}>
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
          <MyCartCard
            cardLabel={'hello'}
            ImageUri={
              'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRJFXTT3YJkb5ZTEM-D71S1dJBBfoWNKUWCo5JHeFUPBTAQOS4kWhOL1kSF30theLDKEBGAplH_1rJDeR9WR8Q'
            }
            Notificationdesc={'This is the description here'}
            Datelabel={'22 Nov,2022'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MyCart;
