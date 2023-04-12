import {View, Text, Image, Animated, Dimensions} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
//import OnboardingScreen from '../src/screens/OnboardingScreen';
// import OwnStorage from '../Api/StorageController';
// import ApiController from '../Api/ApiController';
import {useNavigation} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
// import NetInfo from '@react-native-community/netinfo';

// import {HomeScreenDetail} from '../Redux/Reducers/HomeScreenReducer';
// import Toast from 'react-native-root-toast';
// import ConnectionModal from './ConnectionModal';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import strings from '../constants/lng/LocalizedStrings';

// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

export default function SplashScreen() {
  const navigation = useNavigation();
  const [nointernet, setnointernet] = useState(false);
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const [notification, setNotification] = useState(false);

  //SafeArea Values
  const edges = useSafeAreaInsets();
  // Animation Values
  const StartAnimation = useRef(new Animated.Value(0)).current;

  //Scaling Down Logo
  const scaleLogo = useRef(new Animated.Value(1)).current;

  // Offset Animation
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  setTimeout(() => {
    navigation.navigate('Login');
  }, 5000);

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: -30,
        left: 0,
        right: 0,
      }}>
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          backgroundColor: 'white',
          transform: [
            {
              translateY: StartAnimation,
            },
          ],
        }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            source={Logo}
            style={{
              width: 289.72,
              height: 51.69,
              alignItems: 'center',
              justifyContent: 'center',
              transform: [
                {translateY: moveLogo.y},
                {scale: scaleLogo},
                // {translateX: moveLogo.x},
                // {translateX: moveLogo.y},
                // {scale: scaleLogo},
              ],
            }}></Animated.Image>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          bottom: -100,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 0,
        }}>
        {/* <OnboardingScreen /> */}
      </Animated.View>
    </View>
  );
}
