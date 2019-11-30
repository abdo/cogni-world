import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import IntroSwiper from './components/IntroSwiper/Index';
import MainButton from '../../../../common/components/UI/MainButton';
import MainTextInput from '../../../../common/components/UI/MainTextInput';

const backgroundImg = require('../../../../assets/images/registration-background.png');

export default class Registration extends Component {
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
        <IntroSwiper />
        <MainTextInput label="Your Cognitev Email" />
        <MainButton>Access</MainButton>
      </EnhancedView>
    );
  }
}
