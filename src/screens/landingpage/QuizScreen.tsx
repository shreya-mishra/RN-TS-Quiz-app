import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import Option from '../../components/option/Option';
import Question from '../../components/question/Question';
import {QuestionView} from '../../components/question/style';
import SubmitButton from '../../components/submitbutton/SubmitButton';
import {ButtonColor} from '../../constant/Colors';
import {DummyQuestions} from '../../constant/DummyData';
import {strings} from '../../constant/en';
import {GlobalStyle} from '../../styles/GlobalStyle';

const QuizScreen: React.FC<{}> = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isSelectedOption, setIsSelectedOption] = useState<boolean | null>(
    null,
  );
  const [isQuizEnd, setIsQuizEnd] = useState<boolean>(false);
  if (isQuizEnd) {
    return (
      <View>
        <Header />
        <View style={{margin: 110}}>
          <Text
            style={
              QuestionView.QuestionNum
            }>{`Your Score is ${correctAnswerCount}`}</Text>
          <TouchableOpacity
            style={GlobalStyle.TouchButton}
            onPress={() => setQuestionNum(0)}>
            <Text style={{color: 'white', fontSize: 15}}>
              {strings.Restart_Button_Str}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Header />
      <View style={{flex: 1, flexDirection: 'column', margin: 50}}>
        <Question
          // key={questionNum}
          questionCount={questionNum + 1}
          questionTotal={DummyQuestions.length}
          questionTitle={DummyQuestions[questionNum].question}
        />
        <Option
          key={questionNum}
          options={DummyQuestions[questionNum].options}
          setIsOptionSelectedCorrect={setIsSelectedOption}
        />

        <SubmitButton
          buttonText={
            questionNum === DummyQuestions.length - 1 ? 'Submit' : 'Next'
          }
          handleSubmit={() => {
            setCorrectAnswerCount(prev => (isSelectedOption ? prev + 1 : prev));
            questionNum === DummyQuestions.length - 1
              ? setIsQuizEnd(true)
              : setQuestionNum(prev => prev + 1);
          }}
        />
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  PrimaryButton: {
    backgroundColor: ButtonColor.primary,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    fontSize: 25,
  },
});
export default QuizScreen;
