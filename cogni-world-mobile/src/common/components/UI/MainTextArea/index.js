import { Textarea } from 'native-base';
import React from 'react';
import { gaps, fontTypes } from '../../../../assets/styles/base';

const MainTextarea = ({ style: customStyle, ...props }) => (
  <Textarea
    bordered
    style={{
      width: '80%', borderRadius: 10, padding: gaps.sm, fontFamily: fontTypes.main, ...customStyle
    }}
    {...props}
  />
);

export default MainTextarea;
