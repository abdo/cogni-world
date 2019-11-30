import React, { Component } from 'react';

import { colors } from '../../../assets/styles/base';
import EnhancedView from '../../../common/components/EnhancedView';
import IntroSwiper from './components/IntroSwiper/Index';
import MainButton from '../../../common/components/UI/MainButton';
import MainTextInput from '../../../common/components/UI/MainTextInput';

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
        backgroundImageUrl="https://images.unsplash.com/photo-1523380360198-653413ad178b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <IntroSwiper />
        <MainTextInput label="Your Cognitev Email" />
        <MainButton>Access</MainButton>
      </EnhancedView>
    );
  }
}
