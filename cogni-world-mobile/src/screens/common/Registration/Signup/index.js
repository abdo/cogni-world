import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainButton from '../../../../common/components/UI/MainButton';
import MainHeader from '../../../../common/components/UI/Text/MainHeader';
import MainTextInput from '../../../../common/components/UI/MainTextInput';

const backgroundImg = require('../../../../assets/images/registration-background.png');

export default class Signup extends Component {
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
        <MainHeader>Sign Up</MainHeader>
        <MainTextInput label="Your First Name" />
        <MainTextInput label="Your Last Name" />
        <MainTextInput label="Your Cognitev Email" />
        <MainTextInput label="Your Password" secureTextEntry />
        <MainButton>Sign Up</MainButton>
      </EnhancedView>
    );
  }
}
