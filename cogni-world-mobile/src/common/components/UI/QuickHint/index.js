import { Toast } from 'native-base';

import { colors, fontTypes } from '../../../../assets/styles/base';

const QuickHint = (content, type) =>
  // type can be 'success' or 'danger'
  Toast.show({
    text: content,
    buttonText: 'Okay',
    position: 'bottom',
    hideOnPress: true,
    animation: 'fade',
    textStyle: {
      fontFamily: fontTypes.mainBold,
      textAlign: 'center',
    },
    style: {
      color: colors.primaryLight,
      ...(!type && { backgroundColor: colors.darkGray }),
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
      borderRadius: 5,
    },

    type,
    duration: 2000,
  });

export default QuickHint;
