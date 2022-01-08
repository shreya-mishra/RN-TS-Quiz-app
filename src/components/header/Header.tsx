import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {strings} from '../../constant/en';
import {GlobalStyle} from '../../styles/GlobalStyle';
import {HeaderStyle} from './style';

const Header: React.FC<{}> = () => {
  return (
    <View style={HeaderStyle.header}>
      <Image source={require('../../assets/back.png')} />
      <Text style={GlobalStyle.heading}>{strings.Header_Tag}</Text>
      <Image source={require('../../assets/ques.png')} />
    </View>
  );
};

export default Header;
