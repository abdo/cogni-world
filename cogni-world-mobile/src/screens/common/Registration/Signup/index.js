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

  state = {
    formFields: {
      email: '',
    },
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { formFields } = this.state;
    const email = navigation.getParam('email', '');
    if (email) {
      this.setState({ formFields: { ...formFields, email } });
    }
  }

  render() {
    const { formFields } = this.state;

    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <MainHeader style={{ color: colors.white }}>Sign Up</MainHeader>
        <MainTextInput label="Your First Name" />
        <MainTextInput label="Your Last Name" />
        <MainTextInput label="Your Cognitev Email" value={formFields.email} />
        <MainTextInput label="Your Password" secureTextEntry />
        <MainTextInput label="Confirm Password" secureTextEntry />
        <MainButton>Sign Up</MainButton>
      </EnhancedView>
    );
  }
}
