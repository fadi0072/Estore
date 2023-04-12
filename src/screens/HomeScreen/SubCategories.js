import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

export default function SubCategories({route}) {
  const {param} = route.params;
  useEffect(() => {
    console.log('data', param);
  }, []);
  return (
    <View>
      {param.map(item => (
        <Text
          style={{
            fontSize: 20,
            padding: '5%',
            fontWeight: 'bold',
            color: 'blue',
          }}>
          {item.name}
        </Text>
      ))}
    </View>
  );
}
