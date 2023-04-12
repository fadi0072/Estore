import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Logo from '../assets/Logosplash.png';
import {useNavigation} from '@react-navigation/native';
//import {useDispatch} from 'react-redux';
//import OnboardingScreen from "../src/screens/OnboardingScreen";

export default function Splash2() {
  const navigation = useNavigation();
  var api = new ApiController();
  var localdata = new OwnStorage();
  var dispatch = useDispatch();
  //SafeArea Values
  const edges = useSafeAreaInsets();
  // Animation Values
  const StartAnimation = useRef(new Animated.Value(0)).current;
  const StartAnimation2 = useRef(new Animated.Value(3)).current;
  const StartAnimation3 = useRef(new Animated.Value(4)).current;
  const StartAnimation4 = useRef(new Animated.Value(5)).current;

  const [logoanim, setlogoanim] = useState(false);
  const [shorexanim, setshorexanim] = useState(false);
  const [binanim, setbinanim] = useState(false);

  //Scaling Down Logo
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleLogo2 = useRef(new Animated.Value(1)).current;
  const scaleshorex = useRef(new Animated.Value(2)).current;
  const scalebin = useRef(new Animated.Value(4)).current;

  // Offset Animation
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const moveshorex = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const movebin = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  const moveLogo2 = useRef(new Animated.ValueXY({x: 100, y: -300})).current;

  const MainFunc = async () => {
    setTimeout(() => {
      //Parallel Animation..
      Animated.parallel([
        Animated.timing(StartAnimation, {
          //For Same Height for non safe Area Devices...
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          //Scaling logo to this vlaue
          toValue: 0.7,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          //Move to center
          toValue: {
            x: Dimensions.get('window').width / 20 - 220,
            // x: (Dimensions.get('window').width/2 - 200),
            // y:(Dimensions.get('window').height/2 - 370),
            y: -Dimensions.get('window').height / 2 + 20,
          },
          useNativeDriver: true,
        }),
      ]).start();
      setlogoanim(true);
    }, 4000);
    setTimeout(() => {
      //Parallel Animation..
      Animated.parallel([
        Animated.timing(StartAnimation2, {
          //For Same Height for non safe Area Devices...
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo2, {
          //Scaling logo to this vlaue
          toValue: -0.7,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo2, {
          //Move to center
          toValue: {
            x: Dimensions.get('window').width / 20 - 160,
            // x: (Dimensions.get('window').width/2 - 200),
            // y:(Dimensions.get('window').height/2 - 370),
            y: Dimensions.get('window').height / 2 - 400,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
    setTimeout(() => {
      //Parallel Animation..
      Animated.parallel([
        Animated.timing(StartAnimation3, {
          //For Same Height for non safe Area Devices...
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scaleshorex, {
          //Scaling logo to this vlaue
          toValue: 0.7,
          useNativeDriver: true,
        }),
        Animated.timing(moveshorex, {
          //Move to center
          toValue: {
            x: Dimensions.get('window').width / 20 - 160,
            // x: (Dimensions.get('window').width/2 - 200),
            // y:(Dimensions.get('window').height/2 - 370),
            y: -Dimensions.get('window').height / 2 + 20,
          },
          useNativeDriver: true,
        }),
      ]).start();
      setshorexanim(true);
      StartAnimation4;
    }, 6000);
    setTimeout(() => {
      //Parallel Animation..
      Animated.parallel([
        Animated.timing(StartAnimation4, {
          //For Same Height for non safe Area Devices...
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scalebin, {
          //Scaling logo to this vlaue
          toValue: 0.2,
          useNativeDriver: true,
        }),
        Animated.timing(movebin, {
          //Move to center
          toValue: {
            x: Dimensions.get('window').width / 20,
            // x: (Dimensions.get('window').width/2 - 200),
            // y:(Dimensions.get('window').height/2 - 370),
            y: Dimensions.get('window').height / 2 - 120,
          },
          useNativeDriver: true,
        }),
      ]).start();
      setbinanim(true);
    }, 8000);
    setTimeout(() => {
      //Parallel Animation..
      Animated.parallel([]).start();
      navigation.navigate('OnboardingScreen');
    }, 10000);
  };
  useEffect(() => {
    MainFunc();
  }, []);
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
          backgroundColor: 'transparent',
          transform: [
            {
              translateY: StartAnimation2,
            },
          ],
        }}>
        <Animated.View>
          <Animated.Image
            source={require('../assets/header.png')}
            resizeMode="stretch"
            style={{
              alignItems: 'center',
              width: '100%',

              height: 157,
              justifyContent: 'flex-start',
              transform: [
                {translateY: moveLogo2.y},
                // {scale: scaleLogo},

                // { translateX: moveLogo2.x },
                // {translateX: moveLogo.y},
                // {scale: scaleLogo},
              ],
            }}></Animated.Image>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          zIndex: 1,
          backgroundColor: 'transparent',
          transform: [
            {
              translateY: StartAnimation,
            },
          ],
        }}>
        <Animated.View
          style={{
            alignItems: 'center',
            marginBottom: '5%',
            justifyContent: 'center',
          }}>
          <Animated.Image
            source={require('../assets/splash2.png')}
            style={{
              alignItems: 'center',
              width: logoanim ? (binanim ? 63.24 : 72.44) : 43.24,
              height: logoanim ? (binanim ? 74.69 : 86.6) : 51.69,
              marginRight: '13%',
              justifyContent: 'center',
              transform: [
                {translateY: moveLogo.y},

                {scale: scaleLogo},

                binanim ? {translateX: movebin.x} : {translateX: moveLogo.x},
                // {translateX: moveLogo.x},
                // {translateX: moveLogo.y},
                // {scale: scaleLogo},
              ],
            }}></Animated.Image>

          <Animated.Image
            source={
              logoanim
                ? shorexanim
                  ? require('../assets/logoo.png')
                  : require('../assets/logowitho.png')
                : require('../assets/logoo.png')
            }
            style={{
              alignItems: 'center',

              height: shorexanim ? 39.69 : 41.69,
              width: shorexanim ? 289.72 : 289.72,
              position: 'absolute',
              right: shorexanim ? 50 : null,

              justifyContent: 'center',
              transform: [
                {translateY: StartAnimation3},
                // {translateX: moveLogo.x},
                {translateY: moveshorex.y},
                // {scale: scaleLogo},
              ],
            }}></Animated.Image>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
