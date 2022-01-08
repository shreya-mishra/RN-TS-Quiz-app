/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QuizScreen from './src/screens/landingpage/QuizScreen';
import {GlobalStyle} from './src/styles/GlobalStyle';

// import styles from "./src/styles/GlobalStyle.css"

const App: React.FC<{}> = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={GlobalStyle.background}>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <QuizScreen />
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
