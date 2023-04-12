import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import OnboardingScreen from '../src/screens/OnboardingScreen';
import Login from '../src/screens/Login';
import SplashScreen from '../Components/SplashScreen';
import Splash2 from '../Components/Splash2';
import Registration from '../src/screens/Registration';
import HomeScreen from '../src/screens/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomTabBar} from '../Components/CustomTabBar';
import MyAds from '../src/screens/MyAds/MyAds';
import MyCart from '../src/screens/MyCart/MyCart';
import AddScreen from '../src/screens/AddScreen/AddScreen';
import SubCategories from '../src/screens/HomeScreen/SubCategories';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Splash2" component={Splash2} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};

export const BottomTabNavigation = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: {border: 'none'},
        gestureEnabled: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{gestureEnabled: false}}
      />
      <Tab.Screen name="MyAds" component={MyAds} />
      <Tab.Screen name="MyCart" component={MyCart} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="SubCategories" component={SubCategories} />
    </Tab.Navigator>
  );
};

export default MainStack;
