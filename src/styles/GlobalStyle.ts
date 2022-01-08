/* $backgroundColor :#ff0000; */

// .app {
//   background-color: #fafafa;
// }
import {StyleSheet} from 'react-native';
import {BackgroundColor, ButtonColor, FontColor} from '../constant/Colors';

export const GlobalStyle = StyleSheet.create({
  background: {
    backgroundColor: BackgroundColor.primary,
  },
  heading: {
    color: FontColor.primary,
    fontWeight: 'bold',
    fontSize: 30,
  },
  PrimaryButton: {
    backgroundColor: ButtonColor.primary,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    fontSize: 25,
  },
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
