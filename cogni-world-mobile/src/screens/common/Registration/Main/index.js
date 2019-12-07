import { connect } from 'react-redux';
import React, { Component } from 'react';

import { checkUserHasRegistered } from '../../../../store/actions/authActions';
import { colors } from '../../../../assets/styles/base';
import EnhancedView from '../../../../common/components/EnhancedView';
import IntroSwiper from './components/IntroSwiper/Index';
import LoadingScreen from '../../Loading';
import MainButton from '../../../../common/components/UI/MainButton';
import MainTextInput from '../../../../common/components/UI/MainTextInput';
import validator from './validator';

const backgroundImg = require('../../../../assets/images/registration-background.png');

class Registration extends Component {
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

  componentDidMount() {
    const { isAuthenticated, currentUser, navigation } = this.props;

    if (isAuthenticated && currentUser) {
      if (currentUser.verified) {
        if (currentUser.isAdmin) {
          navigation.replace('AdminTab');
        } else {
          navigation.replace('UserTab');
        }
      }
    }
  }

  onChangeInput = (name, value) => this.setState({ [name]: value.toLowerCase() });

  onAccess = () => {
    const { email } = this.state;
    const { navigation } = this.props;
    const errors = validator({ email });
    if (errors) {
      this.setState({ errors });
    } else {
      this.setState({
        isCheckingUserStatus: true,
        errors: {},
      });
      checkUserHasRegistered(email)
        .then(isRegistered => {
          if (isRegistered) {
            navigation.navigate('Signin', { email });
          } else {
            navigation.navigate('Signup', { email });
          }
        })
        .finally(() => {
          this.setState({
            isCheckingUserStatus: false,
          });
        });
    }
  };

  render() {
    const { errors, isCheckingUserStatus } = this.state;
    const { isCheckingUserAuthentication } = this.props;

    if (isCheckingUserAuthentication) {
      return <LoadingScreen />;
    }

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
        <MainButton
          onPress={this.onAccess}
          isLoading={isCheckingUserStatus}
          disabled={isCheckingUserStatus}
        >
          Access
        </MainButton>
      </EnhancedView>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
  isCheckingUserAuthentication: state.auth.isCheckingUserAuthentication,
});

export default connect(mapStateToProps)(Registration);
