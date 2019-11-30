import { Text } from 'native-base';
import React from 'react';

import { fontSizes, fontTypes } from '../../../../../assets/styles/base';

const MainSemiHeader = ({ style: customStyle, children, ...props }) => (
  <Text
    style={{ fontSize: fontSizes.md, fontFamily: fontTypes.mainBold, ...customStyle }}
    {...props}
  >
    {children}

  </Text>
);

export default MainSemiHeader;
