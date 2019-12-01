import { connect } from 'react-redux';
import React, { Component } from 'react';

import { colors } from '../../../../assets/styles/base';
import * as AuthActions from '../../../../store/actions/authActions';
import EnhancedView from '../../../../common/components/EnhancedView';
import MainButton from '../../../../common/components/UI/MainButton';
import MainHeader from '../../../../common/components/UI/Text/MainHeader';
import MainTextInput from '../../../../common/components/UI/MainTextInput';
import validator from './validator';

const backgroundImg = require('../../../../assets/images/registration-background.png');

class Signup extends Component {
  static navigationOptions = () => ({
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.transparent,
    },
  });

  state = {
    formFields: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
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
    const { navigation, userSignup } = this.props;
    const { formFields } = this.state;
    const errors = validator(formFields);
    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({ errors: {} });
      const signupCallback = () => {
        navigation.replace('WaitForValidation', {
          firstTime: true,
        });
      };

      // signup request
      userSignup(formFields, signupCallback);
    }
  };

  render() {
    const { formFields, errors } = this.state;

    return (
      <EnhancedView
        backgroundImagePath={backgroundImg}
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <MainHeader style={{ color: colors.white }}>Sign Up</MainHeader>
        <MainTextInput
          label="Your First Name"
          error={!!errors.firstName}
          errorText={errors.firstName && errors.firstName[0]}
          value={formFields.firstName}
          name="firstName"
          onChange={this.onChangeInput}
        />
        <MainTextInput
          label="Your Last Name"
          error={!!errors.lastName}
          errorText={errors.lastName && errors.lastName[0]}
          value={formFields.lastName}
          name="lastName"
          onChange={this.onChangeInput}
        />
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
          infoText="At least 8 characters"
          value={formFields.password}
          secureTextEntry
          name="password"
          onChange={this.onChangeInput}
        />
        <MainTextInput
          label="Confirm Password"
          error={!!errors.passwordConfirmation}
          errorText={
            errors.passwordConfirmation && errors.passwordConfirmation[0]
          }
          value={formFields.passwordConfirmation}
          secureTextEntry
          name="passwordConfirmation"
          onChange={this.onChangeInput}
        />
        <MainButton onPress={this.onSubmit}>Sign Up</MainButton>
      </EnhancedView>
    );
  }
}

const mapDispatchToProps = {
  userSignup: AuthActions.userSignup,
};

export default connect(null, mapDispatchToProps)(Signup);
