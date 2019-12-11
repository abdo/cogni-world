import { Alert } from 'react-native';

// The modal is shown when the function is called
// This modal can be a yes/no modal or an OK modal
// If you don't pass "onConfirm", then, it will be an OK modal
const MainModal = ({ text = '', header = '', onConfirm, onCancel = () => null }) => Alert.alert(
  header,
  text,
  onConfirm
    ? [
      { text: 'Cancel', onPress: onCancel },
      { text: 'Yes', onPress: onConfirm },
    ]
    : [{ text: 'Ok', onPress: () => null }],
  { cancelable: false },
);

export default MainModal;
