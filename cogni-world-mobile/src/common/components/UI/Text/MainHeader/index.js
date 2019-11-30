import { Text } from 'native-base';
import React from 'react';

import { fontSizes, fontTypes } from '../../../../../assets/styles/base';

const MainHeader = ({ style: customStyle, children, ...props }) => (
  <Text
    style={{ fontSize: fontSizes.lg, fontFamily: fontTypes.mainHairLine, ...customStyle }}
    {...props}
  >
    {children}
  </Text>
);

export default MainHeader;
