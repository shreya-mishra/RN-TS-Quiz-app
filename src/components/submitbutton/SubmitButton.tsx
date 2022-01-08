import React from 'react';

import {Text, View, Button} from 'react-native';

const SubmitButton: React.FC<{}> = () => {
  return (
    <View>
      <Button title="Submit" onPress={() => console.log('clicked button')} />
      {/* <Text>Button</Text> */}
    </View>
  );
};

export default SubmitButton;
