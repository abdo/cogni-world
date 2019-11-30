import { Text } from 'native-base';
import React from 'react';

import { fontSizes, fontTypes } from '../../../../../assets/styles/base';

const MainText = ({ style: customStyle, children, ...props }) => (
  <Text
    style={{
      fontSize: fontSizes.msm,
      fontFamily: fontTypes.main,
      ...customStyle,
    }}
    {...props}
  >
    {children}
  </Text>
);

export default MainText;
