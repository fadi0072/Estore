import * as React from 'react';
import {
  View,
  Image,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Badge} from 'react-native-elements';
import {CommonActions, DrawerActions} from '@react-navigation/native';

import strings from '../utils/constants/lng/LocalizedStrings';
export const CustomTabBar = ({navigation, route}) => {
  const onPressMore = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.shadowbox}>
        {/* <View style={styles.childContainer}>
          <Pressable
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
            hitSlop={40}
            // onPress={() => {
            //   onPressMore();
            // }}
          >
            <Image
              source={require("../assets/settingIcon.png")}
              resizeMode="contain"
              style={styles.TabBarIcon}
            />

            <Text
              style={{
                fontFamily: "Poppins_500Medium",
                fontSize: 10,
                paddingTop: "0.7%",
              }}
            >
              {strings.SETTING}
            </Text>
          </Pressable>
        </View> */}
        <View style={styles.childContainer}>
          <Pressable
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
            hitSlop={40}
            onPress={() => {
              const resetAction = CommonActions.reset({
                index: 0,
                routes: [{name: 'HomeScreen'}],
              });
              navigation.dispatch(resetAction);
            }}>
            <Image
              source={require('../assets/homeIcon.png')}
              resizeMode="contain"
              style={styles.TabBarIcon}
            />

            <Text
              style={{
                fontFamily: 'Poppins_500Medium',
                fontSize: 10,
                paddingTop: '0.7%',
              }}>
              {strings.HOME}
            </Text>
          </Pressable>
        </View>

        <View style={styles.childContainer}>
          <Pressable
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
            hitSlop={20}
            onPress={() => {
              navigation.navigate('MyAds');
            }}>
            <Image
              source={require('../assets/homeIcon.png')}
              resizeMode="contain"
              style={styles.TabBarIcon}
            />
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 10}}>
              MY Adds
            </Text>
          </Pressable>
        </View>

        <View style={styles.childContainer}>
          <Pressable
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
            hitSlop={20}
            onPress={() => {
              navigation.navigate('MyCart');
            }}>
            <Image
              source={require('../assets/homeIcon.png')}
              resizeMode="contain"
              style={styles.TabBarIcon}
            />
            <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 10}}>
              My Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  shadowbox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 7,
    backgroundColor: 'white',
  },
  badgeStyle: {
    position: 'absolute',
    top: -8,
    right: -12,
  },
  childContainer: {
    marginTop: '2%',

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  TabBarIcon: {
    height: 19.72,
    width: 19.72,
  },
});
