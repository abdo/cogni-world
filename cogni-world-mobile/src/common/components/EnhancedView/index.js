import React from 'react';

import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import PTRView from 'react-native-pull-to-refresh';
import Spinner from 'react-native-loading-spinner-overlay';
import { colors } from '../../../assets/styles/base';

const EnhancedView = ({
  style,
  backgroundImageUrl,
  backgroundImagePath,
  backgroundImageBlueRadius,
  children,
  isLoading,
  onRefresh,
}) => {
  const component = (
    <ImageBackground
      style={{ width: '100%', height: '100%', flex: 1 }}
      blurRadius={backgroundImageBlueRadius}
      source={
        backgroundImageUrl
          ? { uri: backgroundImageUrl }
          : backgroundImagePath || null
      }
    >
      <KeyboardAvoidingView behavior="padding">
        <ScrollView
          style={{ height: '100%' }}
          contentContainerStyle={{ width: '100%', minHeight: '100%' }}
          keyboardShouldPersistTaps="always"
        >
          <View style={[{ height: '100%', width: '100%' }, style]}>
            {children}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <Spinner visible={isLoading} color={colors.primaryLight.toString()} />
    </ImageBackground>
  );

  if (onRefresh) {
    return (
      <PTRView
        onRefresh={onRefresh}
        contentContainerStyle={{ width: '100%', minHeight: '100%' }}
      >
        {component}
      </PTRView>
    );
  }

  return component;
};

EnhancedView.defaultProps = {
  style: {},

  isLoading: false,

  backgroundImageUrl: null,
  backgroundImagePath: null,
  backgroundImageBlueRadius: 0,

  onRefresh: null,

  children: null,
};

EnhancedView.propTypes = {
  style: PropTypes.shape({}),

  backgroundImageUrl: PropTypes.string,
  backgroundImagePath: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  // the passed prop backgroundImagePath should be in the form: require('../../image.png')
  backgroundImageBlueRadius: PropTypes.number,

  onRefresh: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  // only if the prop onRefresh prop is passed, view will be refreshable

  isLoading: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default EnhancedView;
