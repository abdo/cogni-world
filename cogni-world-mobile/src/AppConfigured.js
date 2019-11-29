import { Root, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import loadFonts from './assets/fonts/loadFonts';
import LoadingScreen from './common/components/LoadingScreen';

// This is the main app, with these configured:
// 1- Customized fonts loaded
// 2- Native Base Root
// 3- Redux

export default function App() {
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
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
