import { connect } from 'react-redux';
import { Root } from 'native-base';
import React, { useState, useEffect } from 'react';

import App from './routes/MainNavigator';
import EnhancedView from './common/components/EnhancedView';
import loadFonts from './assets/fonts/loadFonts';
import LoadingScreen from './screens/common/Loading';
import QuickHint from './common/components/UI/QuickHint';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Native Base Root
// 3- Global isLoading effect

const AppConfigured = ({ globalError, isLoading }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  useEffect(() => {
    if (globalError) QuickHint(globalError, 'danger');
  }, [globalError]);

  const loadAssetsAsync = async () => {
    await Promise.all(loadFonts);

    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <EnhancedView noVerticalPadding isLoading={isLoading}>
      <Root>
        <App />
      </Root>
    </EnhancedView>
  );
};

const mapStateToProps = state => ({
  globalError: state.general.error,
  isLoading: state.general.isLoading,
});

export default connect(mapStateToProps)(AppConfigured);
