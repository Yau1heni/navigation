import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

type PropsType = {
  children: React.ReactNode
}

export const WithSafeAreaView = ({children}:  PropsType) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {children}
    </SafeAreaView>
  );
};
