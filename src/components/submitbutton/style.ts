import {StyleSheet} from 'react-native';
import {ButtonColor} from '../../constant/Colors';

export const ButtonView = StyleSheet.create({
  TouchButton: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: ButtonColor.primary,
    marginTop: '10%',
  },
});
