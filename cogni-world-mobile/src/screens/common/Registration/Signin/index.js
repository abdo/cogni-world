import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainButton from '../../../../common/components/UI/MainButton';
import MainHeader from '../../../../common/components/UI/Text/MainHeader';
import MainTextInput from '../../../../common/components/UI/MainTextInput';
import validator from './validator';

const backgroundImg = require('../../../../assets/images/registration-background.png');

export default class Signin extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state = {
    formFields: {
      email: '',
      password: '',
    },
    errors: {},
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { formFields } = this.state;
    const email = navigation.getParam('email', '');
    if (email) {
      this.setState({ formFields: { ...formFields, email } });
    }
  }

  onChangeInput = (name, value) => {
    const { formFields } = this.state;
    return this.setState({ formFields: { ...formFields, [name]: value } });
  };

  onSubmit = () => {
    const { formFields } = this.state;
    const errors = validator(formFields);
    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
    }
  };

  render() {
    const { formFields, errors } = this.state;

    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <MainHeader style={{ color: colors.white }}>Sign In</MainHeader>
        <MainTextInput
          label="Your Cognitev Email"
          error={!!errors.email}
          errorText={errors.email && errors.email[0]}
          value={formFields.email}
          name="email"
          onChange={this.onChangeInput}
        />
        <MainTextInput
          label="Your Password"
          error={!!errors.password}
          errorText={errors.password && errors.password[0]}
          secureTextEntry
          name="password"
          onChange={this.onChangeInput}
        />
        <MainButton onPress={this.onSubmit}>Sign In</MainButton>
      </EnhancedView>
    );
  }
}
