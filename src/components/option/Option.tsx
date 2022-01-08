import {Radio} from 'native-base';
import React, {useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {BackgroundColor, SelectedOptionColor} from '../../constant/Colors';
import {optionType} from '../../constant/Type';
import {GlobalStyle} from '../../styles/GlobalStyle';

type optionProps = {
  options: optionType[];
  setIsOptionSelectedCorrect: (isOptionSelectedCorrect: boolean) => void;
};
const Option: React.FC<optionProps> = ({
  options,
  setIsOptionSelectedCorrect,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  return (
    <View style={{marginTop: 10}}>
      {options.map(option => (
        <TouchableOpacity
          onPress={() => {
            setSelectedOption(option.text);
            setIsOptionSelectedCorrect(option.isCorrect);
          }}
          key={Math.random()}
          style={{
            flex: 1,
            padding: 30,
            justifyContent: 'space-around',
            borderRadius: 10,
            elevation: 1,
            backgroundColor:
              selectedOption === option.text
                ? SelectedOptionColor.primary
                : BackgroundColor.secondary,
            marginTop: 20,
          }}>
          <Radio.Group
            name="myRadioGroup"
            value={selectedOption}
            onChange={nextValue => {
              setSelectedOption(nextValue as string);
            }}>
            <Radio value={option.text}>{option.text}</Radio>
          </Radio.Group>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Option;
