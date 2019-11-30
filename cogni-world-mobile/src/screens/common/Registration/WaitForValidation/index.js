import { Image } from 'react-native';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainHeader from '../../../../common/components/UI/Text/MainHeader';
import MainText from '../../../../common/components/UI/Text/MainText';

const backgroundImg = require('../../../../assets/images/registration-background.png');
const logo = require('../../../../assets/images/logo-white.png');

export default class WaitForValidation extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  render() {
    const { navigation } = this.props;
    const firstTime = navigation.getParam('firstTime', '');

    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          alignSelf: 'center',
        }}
      >
        {firstTime ? (
          <MainHeader style={{ color: colors.white, marginBottom: 20 }}>
            Thank you
          </MainHeader>
        ) : null}
        <Image
          style={{ width: 80, height: 80, marginBottom: 20 }}
          source={logo}
        />
        {!firstTime ? (
          <>
            <MainText
              style={{
                textAlign: 'center',
                marginBottom: 20,
                color: colors.white,
              }}
            >
              Please confirm your email in order to be able to sign in
            </MainText>
            <MainText
              style={{
                textAlign: 'center',
                marginBottom: 20,
                color: colors.white,
              }}
            >
              Another confirmation message has been send to your email
            </MainText>
          </>
        ) : (
          <>
            <MainText
              style={{
                textAlign: 'center',
                marginBottom: 20,
                color: colors.white,
              }}
            >
              A confirmation message has already been send to your email
            </MainText>
            <MainText
              style={{
                textAlign: 'center',
                color: colors.white,
              }}
            >
              Please confirm your email and then enjoy every bit of
              <MainText style={{ fontWeight: 'bold' }}> Cogni World</MainText>
            </MainText>
          </>
        )}
      </EnhancedView>
    );
  }
}
