import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import Header from '../../Components/Header';
import {CheckBox} from 'react-native-elements';
import InputText from '../../Components/InputText';
import Button from '../../Components/Button';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import GlobalStyles from '../../utils/GlobalStyles';
import strings from '../../utils/constants/lng/LocalizedStrings';
//import ApiController from "../../Api/ApiController";
//import * as ImagePicker from "expo-image-picker";
//import { useDispatch, useSelector } from "react-redux";
const WIDTH = Dimensions.get('screen').width;
const Registration = ({route}) => {
  let {newlocation, lat, long} = route.params == undefined ? '' : route.params;
  const isVisible = useIsFocused();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [lastName, setLastName] = useState('');
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [isMobileNoValid, setIsMobileNoValid] = useState(true);
  const [poCode, setPocode] = useState('');
  const [isPoCodeValid, setIsPoCodeValid] = useState(true);
  const [businessName, setBusinessName] = useState('');
  const [licenseImg, setLicenseImg] = useState(null);
  const [isBusinessNameValid, setIsBusinessNameValid] = useState(true);
  const [address, setAddress] = useState('');
  const [latitude, setLat] = useState(null);
  const [showLoader, setShowLoaderM] = useState(false);
  const [businessCat, setBusinessCat] = useState(null);
  const [businessCategories, setBusinessCategories] = useState([]);
  const [businessCategoriesSelection, setBusinessCategoriesSelection] =
    useState([]);
  const [isBusinessCatValid, setIsBusinessCatValid] = useState(true);
  const [staff, setStaff] = useState(null);
  //const [isStaffValid, setIsStaffValid] = useState(true);
  const [bankName, setBankName] = useState(null);
  const [iban, setIban] = useState(null);
  const [accountHN, setAccountHN] = useState(null);
  const [notes, setNotes] = useState(null);
  // const [isNotesValid, setIsNotesValid] = useState(true);
  const [agree, setAgree] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' && 'padding'}
      style={{width: '100%', flex: 1}}>
      <View style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mh30}>
            <Text style={GlobalStyles.NameText}>{strings.REGISTER}</Text>

            <InputText
              label={strings.FIRSTNAME}
              star={'*'}
              onChangeText={text => {
                if (text == '') {
                  setIsFirstNameValid(false);
                } else {
                  setFirstName(text);
                  setIsFirstNameValid(true);
                }
              }}
              placeholder={strings.ENTERFIRSTNAME}
              // placeholder={first_name}
            />
            {!isFirstNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={strings.LASTNAME}
              onChangeText={text => {
                if (text == '') {
                  setIsLastNameValid(false);
                } else {
                  setLastName(text);
                  setIsLastNameValid(true);
                }
              }}
              placeholder={strings.ENTERLASTNAME}
            />
            {!isLastNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}

            <InputText
              label={strings.EMAIL}
              star="*"
              onChangeText={text => {
                if (text == '') {
                  setIsEmailValid(false);
                } else {
                  setEmail(text);
                  setIsEmailValid(true);
                }
              }}
              placeholder={strings.ENTERYOUREMAIL}
            />
            {!isEmailValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={'User Name'}
              onChangeText={text => {
                // if (text == "") {
                //   setIsLastNameValid(false);
                // } else {
                //   setLastName(text);
                //   setIsLastNameValid(true);
                // }
              }}
              placeholder={'Enter User Name'}
            />

            <InputText
              star={'*'}
              label={'Vat Number'}
              onChangeText={text => {
                // if (text == "") {
                //   setIsLastNameValid(false);
                // } else {
                //   setLastName(text);
                //   setIsLastNameValid(true);
                // }
              }}
              placeholder={'Enter Vat Num'}
            />

            <Text style={GlobalStyles.NameText}>Billing Information</Text>
            <InputText
              label={strings.FIRSTNAME}
              star={'*'}
              onChangeText={text => {
                if (text == '') {
                  setIsFirstNameValid(false);
                } else {
                  setFirstName(text);
                  setIsFirstNameValid(true);
                }
              }}
              placeholder={strings.ENTERFIRSTNAME}
              // placeholder={first_name}
            />
            {!isFirstNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={strings.LASTNAME}
              onChangeText={text => {
                if (text == '') {
                  setIsLastNameValid(false);
                } else {
                  setLastName(text);
                  setIsLastNameValid(true);
                }
              }}
              placeholder={strings.ENTERLASTNAME}
            />
            {!isLastNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={'Company Name'}
              onChangeText={text => {}}
              placeholder={'Enter Company Name'}
            />
            <Text style={GlobalStyles.SemiBoldInputTxt}>
              {strings.ADDRESSANDLCOATION + ' 1 '}
              <Text style={{color: '#FF0000'}}>*</Text>
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                borderColor: '#E4E9F3',
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%',
                borderWidth: 0.5,
                padding: 10,
                borderRadius: 3,
              }}
              onPress={() =>
                navigation.navigate('CustomerLocation', {
                  screenName: 'Registration',
                })
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {address == null || address == '' ? (
                  <Text
                    style={{
                      padding: 2,
                      color: 'black',
                      fontSize: 13,
                      opacity: 0.4,
                    }}>
                    Enter Address 1
                  </Text>
                ) : (
                  <Text style={{padding: 2, color: 'black', fontSize: 13}}>
                    {' '}
                    {address}{' '}
                  </Text>
                )}
                <Image source={require('../../assets/path.png')} />
              </View>
            </TouchableOpacity>
            <Text style={GlobalStyles.SemiBoldInputTxt}>
              {strings.ADDRESSANDLCOATION + ' 2 '}
              <Text style={{color: '#FF0000'}}>*</Text>
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                borderColor: '#E4E9F3',
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%',
                borderWidth: 0.5,
                padding: 10,
                borderRadius: 3,
              }}
              onPress={() =>
                navigation.navigate('CustomerLocation', {
                  screenName: 'Registration',
                })
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {address == null || address == '' ? (
                  <Text
                    style={{
                      padding: 2,
                      color: 'black',
                      fontSize: 13,
                      opacity: 0.4,
                    }}>
                    Enter Address 2
                  </Text>
                ) : (
                  <Text style={{padding: 2, color: 'black', fontSize: 13}}>
                    {' '}
                    {address}{' '}
                  </Text>
                )}
                <Image source={require('../../assets/path.png')} />
              </View>
            </TouchableOpacity>
            <InputText
              label={'Enter your City'}
              onChangeText={text => {}}
              placeholder="Enter Your City"
            />

            <InputText
              label={'Enter Your State'}
              onChangeText={text => {}}
              placeholder="458"
            />

            <InputText
              label={strings.POSTOFFICECODE}
              star="*"
              onChangeText={text => {
                if (text == '') {
                  setIsPoCodeValid(false);
                } else {
                  setPocode(text);
                  setIsPoCodeValid(true);
                }
              }}
              placeholder="458"
            />
            {!isPoCodeValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              label={'Enter Your Country'}
              star="*"
              onChangeText={text => {}}
              placeholder="Enter Your Country"
            />
            <InputText
              label={strings.EMAIL}
              star="*"
              onChangeText={text => {
                if (text == '') {
                  setIsEmailValid(false);
                } else {
                  setEmail(text);
                  setIsEmailValid(true);
                }
              }}
              placeholder={strings.ENTERYOUREMAIL}
            />
            <Text style={GlobalStyles.SemiBoldInputTxt}>
              {strings.PHONE}
              {/* <Text style={{ color: "#FF0000" }}>*</Text> */}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.prefixView}>
                <Text style={styles.prefix}>+555</Text>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{width: WIDTH * 0.615, height: '100%'}}
                  value={phoneNo}
                  maxLength={10}
                  placeholder="555-5555"
                  keyboardType="number-pad"
                  underlineColorAndroid="transparent"
                  onChangeText={text => {
                    if (text == '') {
                      setPhoneNo('');
                      setIsPhoneNoValid(false);
                    } else {
                      setPhoneNo(text);
                      setIsPhoneNoValid(true);
                    }
                    // you can use the unmasked value as well

                    // assuming you typed "9" all the way:
                    // console.log(masked); // (99) 99999-9999
                    console.log(text); // 99999999999
                  }}
                  mask={[
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                />
              </View>
            </View>

            <Text style={GlobalStyles.NameText}>Shipping Information</Text>
            <InputText
              label={strings.FIRSTNAME}
              star={'*'}
              onChangeText={text => {
                if (text == '') {
                  setIsFirstNameValid(false);
                } else {
                  setFirstName(text);
                  setIsFirstNameValid(true);
                }
              }}
              placeholder={strings.ENTERFIRSTNAME}
              // placeholder={first_name}
            />
            {!isFirstNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={strings.LASTNAME}
              onChangeText={text => {
                if (text == '') {
                  setIsLastNameValid(false);
                } else {
                  setLastName(text);
                  setIsLastNameValid(true);
                }
              }}
              placeholder={strings.ENTERLASTNAME}
            />
            {!isLastNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              star={'*'}
              label={'Company Name'}
              onChangeText={text => {}}
              placeholder={'Enter Company Name'}
            />
            <Text style={GlobalStyles.SemiBoldInputTxt}>
              {strings.ADDRESSANDLCOATION + ' 1 '}
              <Text style={{color: '#FF0000'}}>*</Text>
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                borderColor: '#E4E9F3',
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%',
                borderWidth: 0.5,
                padding: 10,
                borderRadius: 3,
              }}
              onPress={() =>
                navigation.navigate('CustomerLocation', {
                  screenName: 'Registration',
                })
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {address == null || address == '' ? (
                  <Text
                    style={{
                      padding: 2,
                      color: 'black',
                      fontSize: 13,
                      opacity: 0.4,
                    }}>
                    Enter Address 1
                  </Text>
                ) : (
                  <Text style={{padding: 2, color: 'black', fontSize: 13}}>
                    {' '}
                    {address}{' '}
                  </Text>
                )}
                <Image source={require('../../assets/path.png')} />
              </View>
            </TouchableOpacity>
            <Text style={GlobalStyles.SemiBoldInputTxt}>
              {strings.ADDRESSANDLCOATION + ' 2 '}
              <Text style={{color: '#FF0000'}}>*</Text>
            </Text>
            <TouchableOpacity
              style={{
                height: 45,
                borderColor: '#E4E9F3',
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%',
                borderWidth: 0.5,
                padding: 10,
                borderRadius: 3,
              }}
              onPress={() =>
                navigation.navigate('CustomerLocation', {
                  screenName: 'Registration',
                })
              }>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                {address == null || address == '' ? (
                  <Text
                    style={{
                      padding: 2,
                      color: 'black',
                      fontSize: 13,
                      opacity: 0.4,
                    }}>
                    Enter Address 2
                  </Text>
                ) : (
                  <Text style={{padding: 2, color: 'black', fontSize: 13}}>
                    {' '}
                    {address}{' '}
                  </Text>
                )}
                <Image source={require('../../assets/path.png')} />
              </View>
            </TouchableOpacity>
            <InputText
              label={'Enter your City'}
              onChangeText={text => {}}
              placeholder="Enter Your City"
            />

            <InputText
              label={'Enter Your State'}
              onChangeText={text => {}}
              placeholder="458"
            />

            <InputText
              label={strings.POSTOFFICECODE}
              star="*"
              onChangeText={text => {
                if (text == '') {
                  setIsPoCodeValid(false);
                } else {
                  setPocode(text);
                  setIsPoCodeValid(true);
                }
              }}
              placeholder="458"
            />
            {!isPoCodeValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
            <InputText
              label={'Enter Your Country'}
              star="*"
              onChangeText={text => {}}
              placeholder="Enter Your Country"
            />
            {!isMobileNoValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}

            <InputText
              label={strings.BUSINESSNAME}
              star="*"
              onChangeText={text => {
                if (text == '') {
                  setIsBusinessNameValid(false);
                } else {
                  setBusinessName(text);
                  setIsBusinessNameValid(true);
                }
              }}
              placeholder="Gap Plastic Factory"
            />
            {!isBusinessNameValid && (
              <Text style={GlobalStyles.inputErrorTxt}>
                {' '}
                * This field is Required
              </Text>
            )}
          </View>

          <View style={styles.mh30}>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: '5%',
                  marginRight: '5%',
                }}>
                <CheckBox
                  containerStyle={styles.checkboxContain}
                  checked={agree}
                  checkedIcon={
                    <Image
                      source={require('../../assets/checkedBox.png')}
                      style={styles.checkIcon}
                    />
                  }
                  uncheckedIcon={
                    <Image
                      source={require('../../assets/uncheckBox.png')}
                      style={styles.uncheckIcon}
                    />
                  }
                  onPress={() => setAgree(!agree)}
                  color={agree ? '#52ab1d' : undefined}
                />
                <Text style={{paddingBottom: '10%', right: 42}}>
                  {strings.IDOACCEPT}
                  <Text
                    onPress={() => {
                      navigation.navigate('PrivacyPolicy');
                    }}
                    style={styles.underline}>
                    {strings.PRIVACYPOLICY}
                  </Text>{' '}
                  &{' '}
                  <Text
                    onPress={() => {
                      navigation.navigate('TermsConditions');
                    }}
                    style={styles.underline}>
                    {strings.TERMSCONDITION}
                  </Text>
                </Text>
              </View>
              <Button
                showloaderM={showLoader}
                label={strings.SUBMIT}
                style={{backgroundColor: agree ? '#52ab1d' : 'grey'}}
                disabled={!agree}
                onPress={() => {
                  navigation.navigate('Login');
                }}
              />
            </View>
          </View>
          <View style={{marginBottom: '60%'}} />
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  phoneNumberView: {
    height: 45,
    margin: 12,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 3,
  },
  modal_view: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modal_view_business: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  Timepicker: {
    backgroundColor: '#E4E9F3',
    paddingBottom: 40,
  },
  warning_modal: {
    width: '85%',
    height: '50%',
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

  FilterActionsWrap: {
    marginBottom: 10,
  },
  FilterRadioWrap: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FilterRadio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  FilterActiveRadioWrap: {
    borderColor: 'blue',
  },
  FilterActiveRadio: {
    backgroundColor: 'blue',
  },
  FilterMlabel: {
    color: 'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E4E9F3',
    height: 45,
    marginTop: 10,
    borderWidth: 1.0,
    padding: 10,
    borderRadius: 3,
  },
  prefix: {
    fontSize: 12,
    fontFamily: 'Poppins_500Medium',
    top: 3,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  prefixView: {
    backgroundColor: '#51AB1D',
    alignItems: 'center',
    height: 45,
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    marginRight: 10,
  },
  underline: {textDecorationLine: 'underline', color: 'blue'},
  text: {
    color: '#000000',
    margin: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  mh30: {
    marginHorizontal: 30,
  },
  mb30: {
    marginBottom: 70,
  },
  checkIcon: {
    top: -13,
    right: 23,
    width: 16,
    height: 16,
  },
  uncheckIcon: {
    top: -13,
    right: 23,
    width: 16,
    height: 16,
  },
  checkboxContain: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
});
