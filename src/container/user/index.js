import React from 'react';
import {View, Text} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
function User() {
  const fieldRef = React.createRef();

  const onSubmit = () => {
    let {current: field} = this.fieldRef;

    console.log(field.value());
  };

  const formatText = (text, key) => {
    switch (key) {
      case 'phoneNumber':
        return text.replace(/[^+\d]/g, '');
      default:
        break;
    }
  };
  return (
    <View>
      <OutlinedTextField
        label="Phone number"
        keyboardType="phone-pad"
        formatText={formatText}
        onSubmitEditing={onSubmit}
        ref={fieldRef}
      />
    </View>
  );
}
export default User;
