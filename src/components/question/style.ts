import {StyleSheet} from 'react-native';
import {FontColor} from '../../constant/Colors';

export const QuestionView = StyleSheet.create({
  QuestionNum: {
    color: FontColor.secondary,
    fontSize: 27,
    fontWeight: 'bold',
  },
  Question: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 25,
  },
});
