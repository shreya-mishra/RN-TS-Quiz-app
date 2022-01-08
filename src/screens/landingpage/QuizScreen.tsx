import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import Option from '../../components/option/Option';
import Question from '../../components/question/Question';
import SubmitButton from '../../components/submitbutton/SubmitButton';
const QuizScreen: React.FC<{}> = () => {
  return (
    <View>
      <Header />
      <SubHeader />
      <Question />
      <Option />
      <SubmitButton />
    </View>
  );
};

export default QuizScreen;
