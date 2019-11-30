import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import checkUserHasRegistered from '../../../../store/actions/authActions';
import EnhancedView from '../../../../common/components/EnhancedView';
import IntroSwiper from './components/IntroSwiper/Index';
import MainButton from '../../../../common/components/UI/MainButton';
import MainTextInput from '../../../../common/components/UI/MainTextInput';
import validator from './validator';

const backgroundImg = require('../../../../assets/images/registration-background.png');

export default class Registration extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state = {
    isCheckingUserStatus: false,
    email: '',
    errors: {},
  };

  onChangeInput = (name, value) => this.setState({ [name]: value });

  onAccess = () => {
    const { email } = this.state;
    const { navigation } = this.props;
    const errors = validator({ email });
    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({
        isCheckingUserStatus: true,
      });
      checkUserHasRegistered(email, isRegistered => {
        this.setState({
          isCheckingUserStatus: false,
          errors: {},
        });
        if (isRegistered) {
          navigation.navigate('Signin', { email });
        } else {
          navigation.navigate('Signup', { email });
        }
      });
    }
  };

  render() {
    const { errors, isCheckingUserStatus } = this.state;
    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <IntroSwiper />
        <MainTextInput
          label="Your Cognitev Email"
          error={!!errors.email}
          errorText={errors.email && errors.email[0]}
          name="email"
          onChange={this.onChangeInput}
        />
        <MainButton onPress={this.onAccess} isLoading={isCheckingUserStatus}>
          Access
        </MainButton>
      </EnhancedView>
    );
  }
}
