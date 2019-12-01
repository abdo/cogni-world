import { connect } from 'react-redux';
import { Root } from 'native-base';
import React, { useState, useEffect } from 'react';

import * as AuthActions from './store/actions/authActions';
import App from './routes/MainNavigator';
import EnhancedView from './common/components/EnhancedView';
import loadFonts from './assets/fonts/loadFonts';
import LoadingScreen from './screens/common/Loading';
import QuickHint from './common/components/UI/QuickHint';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Native Base Root
// 3- Global error effect
// 4- Global isLoading effect

const AppConfigured = ({
  globalError,
  isLoading,
  checkIfUserIsSigned,
  isAuthenticated,
  isCheckingUserAuthentication,
  currentUser,
}) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAssetsAsync();
    checkIfUserIsSigned();
  }, []);

  useEffect(() => {
    if (globalError) QuickHint(globalError, 'danger');
  }, [globalError]);

  const loadAssetsAsync = async () => {
    await Promise.all(loadFonts);

    setFontLoaded(true);
  };

  if (!fontLoaded || isCheckingUserAuthentication) {
    return <LoadingScreen />;
  }

  const { isAdmin } = currentUser;

  return (
    <EnhancedView noVerticalPadding isLoading={isLoading}>
      <Root>{App({ isAuthenticated, isAdmin })}</Root>
    </EnhancedView>
  );
};

const mapStateToProps = state => ({
  globalError: state.general.error,
  isLoading: state.general.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
  isCheckingUserAuthentication: state.auth.isCheckingUserAuthentication,
});

const mapDispatchToProps = {
  checkIfUserIsSigned: AuthActions.checkIfUserIsSigned,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppConfigured);
