import { Root } from 'native-base';
import React, { useState, useEffect } from 'react';

import App from './routes/MainNavigator';
import loadFonts from './assets/fonts/loadFonts';
import LoadingScreen from './screens/common/Loading';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Native Base Root
// 3- Redux

const AppConfigured = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  const loadAssetsAsync = async () => {
    await Promise.all(loadFonts);

    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Root>
      <App />
    </Root>
  );
};


export default AppConfigured;
