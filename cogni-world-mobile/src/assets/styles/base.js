import { Dimensions } from 'react-native';
import Color from 'color';

// DIMENTIONS

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

Dimensions.addEventListener('change', dims => {
  dimensions.fullHeight = dims.window.height;
  dimensions.fullWidth = dims.window.width;
});

export const sizes = {
  bottomTabHeight: 65,
  headerHeight: 60,
  mainContentWidth: '90%',
  mainContentWidthWithoutPercent: 90,
};

// GAPS

export const gaps = {
  xxsm: 3,
  xsm: 5,
  sm: 10,
  msm: 15,
  md: 20,
  lg: 30,
  xl: 40,
  xxl: 50,
  xxxl: 80,
  filler: 120,
};

// FONT SIZES

export const fontSizes = {
  xs: 10,
  sm: 12,
  msm: 15,
  md: 18,
  lg: 28,
  xlg: 40,
  huge: 50,
};

// FONT TYPES

export const fontTypes = {
  main: 'latoMedium',
  mainBold: 'latoBold',
  mainLight: 'latoLight',
  mainHairLine: 'latoHairline',
};

// COLORS

const primaryColor = Color('#7F63DC');
const secondaryColor = Color('#FFB26C');
const tertiaryColor = Color('#F4F2FC');
const black = Color('#232323');
const white = Color('#FFFFFF');
const red = Color('#FC4445');
const error = Color('#FC4445');
const lightGray = Color('#B3B3B3');
const darkGray = Color('#627273');
const transparent = '#00FFFF00';

export const colors = {
  primary: primaryColor,
  primaryLight: primaryColor.lighten(0.3),
  primaryTransparent: primaryColor.fade(0.3),
  secondary: secondaryColor,
  tertiary: tertiaryColor,
  black,
  white,
  red,
  error,
  lightGray,
  darkGray,
  transparent,
};
