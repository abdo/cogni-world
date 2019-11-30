import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainButton from '../../../../common/components/UI/MainButton';
import MainHeader from '../../../../common/components/UI/Text/MainHeader';
import MainTextInput from '../../../../common/components/UI/MainTextInput';

const backgroundImg = require('../../../../assets/images/registration-background.png');

export default class Signin extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  render() {
    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <MainHeader>Sign In</MainHeader>
        <MainTextInput label="Your Cognitev Email" />
        <MainTextInput label="Your Password" secureTextEntry />
        <MainButton>Sign In</MainButton>
      </EnhancedView>
    );
  }
}
