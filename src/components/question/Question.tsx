import React from 'react';

import {Text, View} from 'react-native';
import {strings} from '../../constant/en';
import {QuestionView} from './style';

type questionProps = {
  questionTitle: string;
  questionCount: number;
  questionTotal: number;
};
const Question: React.FC<questionProps> = ({
  questionCount,
  questionTitle,
  questionTotal,
}) => {
  return (
    <View>
      <Text style={QuestionView.QuestionNum}>
        {`${strings.Question_Str}  ${questionCount}/${questionTotal}`}
      </Text>
      <Text style={QuestionView.Question}>{questionTitle}</Text>
    </View>
  );
};

export default Question;
