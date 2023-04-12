import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStack from './navigations/StackNavigation';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
