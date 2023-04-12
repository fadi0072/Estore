import React, {useState, useEffect} from 'react';
import {
  CommonActions,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  BackHandler,
} from 'react-native';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import Button from '../../Components/Button';
import GlobalStyles from '../../utils/GlobalStyles';
import strings from '../../utils/constants/lng/LocalizedStrings';
const WIDTH = Dimensions.get('window').width;

export default function Login() {
  // const {Profile} = useSelector(state => state.ProfileInfo);
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('');
  const [selectedlang, setselectedlang] = useState('');

  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [showLoaderM, setShowLoaderM] = useState(false);
  const [showModal, SetshowModal] = useState(false);
  const [nointernet, setnointernet] = useState(false);
  const [showpassword, setShowPassword] = useState(true);

  //var api = new ApiController();
  //var localdata = new OwnStorage();
  //const dispatch = useDispatch();
  // const selectedLng = async () => {
  //   const lngData = await AsyncStorage.getItem('language');

  //   setselectedlang(lngData);
  //   console.log('abhi language ye wali h', lngData);
  //   if (!!lngData) {
  //     strings.setLanguage(lngData);
  //   }
  // };
  // const SendFCM = async token => {
  //   let fcmToken = await AsyncStorage.getItem('fcmToken');
  //   console.log('fcmToken', fcmToken);

  //   let data = new FormData();

  //   data.append('platform', 'android');
  //   data.append('key', 'playerid');
  //   data.append('value', fcmToken);
  //   console.log(data);
  //   api
  //     .sendFCM(token, data)
  //     .then(res => {
  //       navigation.navigate('DrawerMenu', {screen: 'BottomTabNavigation'});

  //       console.log('notificationfromLogin:', res.data);
  //     })
  //     .catch(error => {
  //       console.log('errorrr:', error.message);
  //     });
  // };

  // const onChangeLng = lng => {
  //   if (lng === 'en') {
  //     localdata.setvalue('language', 'en');
  //     console.log('enenenenenenenenenenenglish');
  //     const resetAction = CommonActions.reset({
  //       index: 0,
  //       routes: [{name: 'Login'}],
  //     });
  //     navigation.dispatch(resetAction);
  //     //strings.setLanguage(lng);
  //     return;
  //   }
  //   if (lng === 'es') {
  //     localdata.setvalue('language', 'es');
  //     console.log('esesesespanish');
  //     const resetAction = CommonActions.reset({
  //       index: 0,
  //       routes: [{name: 'Login'}],
  //     });
  //     navigation.dispatch(resetAction);
  //     // strings.setLanguage(lng);
  //     return;
  //   }
  // };
  // const setlngSpanish = () => {
  //   localdata.setvalue('language', 'es');
  //   onChangeLng('es');
  // };

  // const setlngEnglish = () => {
  //   localdata.setvalue('language', 'en');
  //   onChangeLng('en');
  // };
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       BackHandler.exitApp();
  //       return true;
  //     };
  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   }, []),
  // );
  // useEffect(async () => {
  //   selectedLng();
  //   const lngData = await AsyncStorage.getItem('language');
  //   setLang(lngData);
  //   console.log('abhi language ye wali h', lngData);
  //   const unsubscribe = NetInfo.addEventListener(state => {
  //     // console.log("Connection type", state.type);
  //     //   console.log("Is connected?", state.isConnected);
  //     //   Toast.show("aaa" + state.isConnected);

  //     if (state.isConnected === false) {
  //       setnointernet(true);
  //     } else if (state.isConnected === true) {
  //       setnointernet(false);
  //     }
  //   });
  // });
  // const SaveDataLocally = async (token, username, password) => {
  //   await localdata.SaveLoginPref(token, username, password);
  // };
  // // const LoginButton = () => {
  // //   setShowLoaderM(true);
  // //   if (username == "") {
  // //     setIsUsernameValid(false);
  // //   }
  // //   if (password == "") {
  // //     setIsPasswordValid(false);
  // //   }
  // //   api
  // //     .Login(username, password)
  // //     .then((res) => {
  // //       setShowLoaderM(false);
  // //       let apitoken = res.data.data.api_token;
  // //       console.log("Response is", res);
  // //       SaveDataLocally(apitoken, username, password);
  // //       let role = res.data.data.roles;
  // //       console.log("response is ", res);
  // //       console.log("API token is ", apitoken);
  // //       console.log("Roles is ", role);
  // //       if (role == Role) {
  // //         SendFCM(apitoken);
  // //         getprofile(apitoken);
  // //         navigation.navigate("DrawerMenu", { screen: "BottomTabNavigation" });
  // //       } else {
  // //         Toast.show("Only Customers are alloweded");
  // //       }
  // //     })
  // //     .catch((error) => {
  // //       console.log("error", error);
  // //       setShowLoaderM(false);
  // //       Toast.show(error.response.data.error);
  // //     });
  // // };
  // const getprofile = async token => {
  //   api
  //     .getProfile(token)
  //     .then(res => {
  //       // this.props.dispatch(setprofiledata(res.data.data));
  //       // this.props.disablePush(setProfilePoints(res.data.data.earned_pts));
  //       localdata.UpdateUserID(res.data.data.id);
  //       //console.log("dataa is", res.data.data);
  //       dispatch(CustomerDetails(res.data.data));
  //       if (res.data.data.avatar_url == undefined) {
  //         console.log('Undefineeeeeeeed thumbnailllllsss');
  //       } else {
  //         dispatch(CustomerThumbnail(res.data.data.avatar_url));
  //         console.log('thumbnailllllllalll123:', res.data.data.avatar_url);
  //       }
  //     })
  //     .catch(error => {
  //       console.log('error in profile:', error);
  //     });
  // };
  return (
    <ScrollView style={GlobalStyles.containerWhite}>
      <Header />
      <View style={GlobalStyles.innerView}>
        <Text style={GlobalStyles.NameText}>{strings.HELLO}</Text>
        <InputText
          label={strings.EMAIL}
          style={styles.input}
          placeholder={strings.ENTERYOUREMAIL}
          onChangeText={text => {
            if (text == '') {
              setIsUsernameValid(false);
            } else {
              setUsername(text);
              setIsUsernameValid(true);
            }
          }}
        />
        {!isUsernameValid && (
          <Text style={GlobalStyles.inputErrorTxt}>
            {' '}
            * This field is Required
          </Text>
        )}

        <InputText
          label={strings.PASSWORD}
          onChangeText={text => {
            if (text == '') {
              setIsPasswordValid(false);
            } else {
              setPassword(text);
              setIsPasswordValid(true);
            }
          }}
          placeholder="***********"
          secureTextEntry={showpassword}
        />
        <Pressable
          style={{bottom: 30, left: WIDTH * 0.6}}
          onPress={() => setShowPassword(!showpassword)}
          hitSlop={20}>
          {showpassword == true ? (
            <Image
              source={require('../../assets/closeeye.png')}
              style={{width: 20, height: 20}}
            />
          ) : (
            <Image
              source={require('../../assets/openeye.png')}
              style={{width: 20, height: 20}}
            />
          )}
        </Pressable>

        {!isPasswordValid && (
          <Text style={GlobalStyles.inputErrorTxt}>
            {' '}
            * This field is Required
          </Text>
        )}
        {/* <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={GlobalStyles.forgotText}>{strings.FORGOTPASSWORD}</Text>
        </TouchableOpacity> */}
        {/* <Button label="Login" onPress={LoginButton} /> */}
        <TouchableOpacity
          style={GlobalStyles.Button}
          onPress={() => {
            navigation.navigate('BottomTabNavigation', {screen: 'HomeScreen'});
            //navigation.navigate('HomeScreen');
            // if (password.length < 11) {
            //   Toast.show("Password contain atleast 11 char");
            // } else {
            //   LoginButton();
            // }
          }}>
          <View style={[GlobalStyles.FlexDirectionRow]}>
            {showLoaderM && (
              <ActivityIndicator
                size="small"
                color="white"
                style={[GlobalStyles.activityIndicator]}></ActivityIndicator>
            )}
            <Text style={GlobalStyles.BtnText}>{strings.LOGIN}</Text>
          </View>
        </TouchableOpacity>

        <View style={[GlobalStyles.FlexDirectionRow, {paddingTop: '2%'}]}>
          <Text style={GlobalStyles.regulatTextlight}>
            {strings.DONTHAVEANACCOUNT}
          </Text>
          {/* <TouchableOpacity onPress={() => navigation.navigate("RegisterType")}> */}
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins_600SemiBold',
                color: '#51AB1D',
                left: 3,
              }}>
              {strings.REGISTER}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Modal
            visible={showModal}
            onBackdropPress={() => SetshowModal(false)}
            transparent
            onRequestClose={() => SetshowModal(false)}
            animationType="slide"
            hardwareAccelerated>
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={() => {
                SetshowModal(false);
              }}>
              <View style={styles.modal_view}>
                <View style={styles.warning_modal}>
                  <Text
                    style={[
                      GlobalStyles.regularText,
                      {
                        color: '#6E6E6E',
                        marginTop: '10%',
                        alignSelf: 'center',
                        marginHorizontal: 10,
                      },
                    ]}>
                    {strings.AREYOUSRURELANG}
                  </Text>
                  <View>
                    <View style={{paddingTop: 25}}>
                      <Button
                        style={{
                          width: '90%',
                        }}
                        label={strings.YES}
                        onPress={() => {
                          // if (lang == 'es') {
                          //   SetshowModal(false), setlngEnglish();
                          // } else {
                          //   SetshowModal(false), setlngSpanish();
                          // }
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  langSwitch: {
    paddingLeft: '70%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Switchinput: {
    width: 60,
    height: 33,
    borderColor: '#E4E9F3',
    borderWidth: 1,
    borderRadius: 5,
    left: 5,
    justifyContent: 'center',
  },
  innerTextLan: {
    alignSelf: 'center',
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
  },
  modal_view: {
    flex: 1,
    paddingTop: '30%',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: '90%',
    height: '80%',
    borderColor: '#707070',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,

    elevation: 23,
  },
});
