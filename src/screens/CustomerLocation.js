import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MapView from 'react-native-maps';
import {useDispatch} from 'react-redux';
import * as Location from 'expo-location';

import {ActivityIndicator} from 'react-native';
import strings from '../../constants/lng/LocalizedStrings';
import InputText from '../../Components/InputText';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Keyboard} from 'react-native';
import {useRef} from 'react';

const CustomerLocation = ({route}) => {
  const {screenName} = route.params == undefined ? '' : route.params;
  const mapref = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pin, setPin] = useState();
  const [location, setLocation] = useState(null);
  const [Address, setAddress] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    console.log('scren', screenName);
    (async () => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true); // or some other action
        },
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false); // or some other action
        },
      );

      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let Address = await Location.reverseGeocodeAsync(location.coords);
      setAddress(
        Address[0].street +
          ', ' +
          Address[0].city +
          ', ' +
          Address[0].country +
          ' ',
        // Address[0].postalCode
      );
      setLat(location.coords.latitude), setLong(location.coords.longitude);
      setLocation(location);
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [1]);
  const getAddres = async (lat, long) => {
    let Address = await Location.reverseGeocodeAsync({
      latitude: lat,
      longitude: long,
    });
    setAddress(
      Address[0].street +
        ', ' +
        Address[0].city +
        ', ' +
        Address[0].country +
        ' ',
      // Address[0].postalCode
    );
    setLat(lat), setLong(long);
  };
  if (pin == undefined || pin == '') {
    return (
      <ActivityIndicator
        style={{flex: 1, alignSelf: 'center'}}
        size="large"
        color="green"></ActivityIndicator>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backStyle}
            onPress={() =>
              // dispatch(CustomerAddress(Address)) +
              // dispatch(CustomerLat(lat)) +
              // dispatch(CustomerLong(long)) +
              // navigation.goBack()
              navigation.navigate(
                screenName == 'Registration' ? 'Registration' : 'EditProfile',
                {
                  newlocation: Address,
                  lat: lat,
                  long: long,
                },
              )
            }>
            <Image source={require('../../assets/backIcon.png')} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{strings.customerslocation}</Text>
          <View style={{width: 30, height: 30}} />
        </View>
        <View style={styles.innerContainer}>
          <Text
            style={{
              paddingLeft: 25,
              fontSize: 14,
              color: '#51AB1D',
              fontFamily: 'Poppins_500Medium',
            }}>
            {strings.HI}
          </Text>
          <Text
            style={{
              paddingLeft: 25,
              fontSize: 18,
              color: 'black',
              fontFamily: 'Poppins_600SemiBold',
            }}>
            {strings.WELCOMEBACK},
          </Text>

          {!isKeyboardVisible ? (
            <View style={styles.mapview}>
              <MapView
                ref={mapref}
                onMapReady={() => {
                  setLat(pin.latitude);
                  setLong(pin.longitude);
                }}
                // provider={PROVIDER_GOOGLE}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 6,
                }}
                initialRegion={{
                  latitude: pin.latitude,
                  longitude: pin.longitude,
                  latitudeDelta: 0.00922,
                  longitudeDelta: 0.00421,
                }}
                onUserLocationChange={e => {
                  console.log('onUserLocationChange', e.nativeEvent.coordinate);
                  setPin({
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                  });
                }}
                followsUserLocation={false}
                showsUserLocation={false}
                // onPress={(event) => {
                //   let location = event.nativeEvent.coordinate;
                //   console.log("Updated Location", location.latitude);
                //   let lat, long;
                //   lat = location.latitude;
                //   long = location.longitude;
                //   getAddres(parseInt(lat), parseInt(long));
                //   //  Address = Location.reverseGeocodeAsync(location);
                //   setPin(event.nativeEvent.coordinate);
                // }}
              >
                <MapView.Marker
                  draggable
                  coordinate={pin}
                  title={'Your Location'}
                  onDragEnd={event => {
                    let location = event.nativeEvent.coordinate;
                    console.log('Updated Location', location.latitude);
                    let lat, long;
                    lat = location.latitude;
                    long = location.longitude;
                    getAddres(parseFloat(lat), parseFloat(long));
                    //  Address = Location.reverseGeocodeAsync(location);
                    setPin(event.nativeEvent.coordinate);
                  }}
                />
              </MapView>
            </View>
          ) : null}
          <View style={styles.routedetails}>
            <View style={styles.innerContainerAddress}>
              <Image
                style={{marginRight: '3%'}}
                source={require('../../assets/location.png')}></Image>
              <GooglePlacesAutocomplete
                placeholder={Address}
                fetchDetails={true}
                enablePoweredByContainer={false}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  setAddress(data.description);
                  console.log(
                    'here',
                    JSON.stringify(details?.geometry?.location),
                  );
                  setLat(details?.geometry?.location.lat);
                  setLong(details?.geometry?.location.lng);
                  setPin({
                    latitude: details?.geometry?.location.lat,
                    longitude: details?.geometry?.location.lng,
                  });

                  mapref.current.fitToCoordinates([
                    {
                      latitude: details?.geometry?.location.lat,
                      longitude: details?.geometry?.location.lng,
                    },
                  ]);
                }}
                query={{
                  key: 'AIzaSyDXoHO79vxypTv8xL4V10cf5kFpIYDO9Rk',
                  language: 'en',
                }}
              />

              {/* <View style={styles.containertxt}>
                <View style={{ flexDirection: "row" }}></View>
                <TextInput
                  style={[styles.input]}
                  onChangeText={(text) => {
                    setAddress(text);
                  }}
                  defaultValue={Address}
                />
              </View> */}
            </View>
            {/* <View style={styles.innerContainerrow}>
            <View style={styles.innerContainerroute}>
              {
                <Image
                  style={{ marginRight: "3%" }}
                  source={require("../../assets/navroute.png")}
                ></Image>
              }
              {
                <Text
                  style={{
                    color: "#6E6E6E",
                    fontSize: 14,
                    paddingTop: 8,
                    paddingLeft: 8,

                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  25km
                </Text>
              }
            </View>
            <View style={styles.innerContainertime}>
              {
                <Image
                  style={{ marginLeft: "3%" }}
                  source={require("../../assets/time.png")}
                ></Image>
              }
              {
                <Text
                  style={{
                    color: "#6E6E6E",
                    fontSize: 14,
                    paddingLeft: 8,
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  40 Min
                </Text>
              }
            </View>
          </View> */}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                // console.log("latlong", lat, long);
                // dispatch(CustomerAddress(Address)) +
                //   dispatch(CustomerLat(lat)) +
                //   dispatch(CustomerLong(long)) +
                //   navigation.goBack();
                navigation.navigate(
                  screenName == 'Registration' ? 'Registration' : 'EditProfile',
                  {
                    newlocation: Address,
                    lat: lat,
                    long: long,
                  },
                );
              }}
              style={styles.loginBtn}>
              <Text style={styles.btnText}>{strings.SAVE}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

export default CustomerLocation;

const styles = StyleSheet.create({
  containertxt: {
    //backgroundColor: "#fff",
  },
  input: {
    borderColor: '#E4E9F3',
    height: 45,
    width: 290,
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },
  label: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  star: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
    left: 2,
    color: '#FF0000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffe713',
  },
  header: {
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    paddingTop: '10%',
    fontSize: 18,
    fontFamily: 'Poppins_500Medium',
    paddingBottom: '2.2%',
  },
  backStyle: {
    paddingTop: '8%',
    paddingLeft: '6%',
  },
  innerContainer: {
    paddingTop: '5%',
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.67,
    shadowRadius: 15.19,
    elevation: 60,
  },
  buttonContainer: {
    paddingTop: '3%',
    alignItems: 'center',
  },
  mapview: {
    marginRight: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    height: '60%',
    marginLeft: '5%',
  },
  routedetails: {
    borderWidth: 0.8,
    borderColor: '#E4E9F3',
    borderRadius: 6,
    backgroundColor: 'white',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '2%',
  },
  innerContainerAddress: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '3%',
  },
  innerContainerrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '2%',
  },
  innerContainertime: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    marginLeft: '10%',
  },
  innerContainerroute: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '4%',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  loadmore: {
    margin: '9%',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 90,
  },
  loginBtn: {
    width: '75%',
    alignContent: 'center',
    borderRadius: 5,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#52ab1d',
    paddingRight: 15,
  },
});
