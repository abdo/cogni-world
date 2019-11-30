import { ActivityIndicator, View } from 'react-native';
import React from 'react';

import { colors } from '../../../assets/styles/base';
import styles from './style';

const LoadingScreen = () => (
  <View style={styles.root}>
    <ActivityIndicator size="large" color={colors.white} />
  </View>
);

export default LoadingScreen;
