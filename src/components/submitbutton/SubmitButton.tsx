import React from 'react';

import {Text, View, Button, TouchableOpacity} from 'react-native';
import {QuestionView} from '../question/style';
import {ButtonView} from './style';

type submitButtonProps = {
  buttonText: string;
  handleSubmit: () => void;
};
const SubmitButton: React.FC<submitButtonProps> = ({
  buttonText,
  handleSubmit,
}) => {
  return (
    <View>
      {/* <Button
        // style={QuestionView.PrimaryButton}
        title={buttonText}
        onPress={handleSubmit}
      /> */}
      <TouchableOpacity onPress={handleSubmit} style={ButtonView.TouchButton}>
        <Text style={{color: 'white', fontSize: 15}}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
