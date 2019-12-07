import { Fumi } from 'react-native-textinput-effects';
import { View, Text } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import OctIcon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';
import React from 'react';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {
  sizes,
  colors,
  fontSizes,
  gaps,
  fontTypes,
} from '../../../../assets/styles/base';

const MainTextInput = ({
  initialValue,
  value,
  error,
  errorText,
  color,
  keyboardType,
  onChange,
  name,
  label,
  infoText,
  iconType,
  iconName,
  small,
  style: customStyle,
  ...props
}) => {
  const onChangeText = inputValue => {
    let submittedValue = inputValue;

    if (keyboardType === 'number-pad' || keyboardType === 'numeric') {
      if (isNaN(submittedValue)) {
        submittedValue = '';
      } else {
        submittedValue = Number(submittedValue);
      }
    }

    onChange(name, submittedValue);
  };

  let iconClass = '';

  switch (iconType) {
    case 'FontAwesome':
      iconClass = FontAwesomeIcon;
      break;
    case 'AntDesign':
      iconClass = AntDesignIcon;
      break;
    case 'Entypo':
      iconClass = EntypoIcon;
      break;
    case 'Ionicons':
      iconClass = IonIcon;
      break;
    case 'MaterialIcons':
      iconClass = MaterialIcon;
      break;
    case 'SimpleLineIcons':
      iconClass = SimpleLineIcon;
      break;
    case 'MaterialCommunityIcons':
      iconClass = MaterialCommunityIcon;
      break;
    case 'Feather':
      iconClass = FeatherIcon;
      break;
    case 'Foundation':
      iconClass = FoundationIcon;
      break;
    case 'EvilIcons':
      iconClass = EvilIcon;
      break;
    case 'Octicons':
      iconClass = OctIcon;
      break;

    default:
      iconClass = FontAwesomeIcon;
      break;
  }

  return (
    <View
      style={{
        alignSelf: small ? 'flex-start' : 'center',
        width: small
          ? `${sizes.mainContentWidthWithoutPercent / 2}%`
          : sizes.mainContentWidth,
        marginLeft: 0,
        marginVertical: gaps.md,
      }}
    >
      <Fumi
        label={label}
        onChangeText={onChangeText}
        iconClass={iconClass}
        iconName={iconName}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        inputStyle={{ color: colors.black, fontFamily: fontTypes.main }}
        keyboardType={keyboardType}
        defaultValue={initialValue}
        {...(value || value === '' ? { value } : {})}
        style={{
          borderColor: error ? colors.red : colors.lightGray,
          borderWidth: 2,
          borderRadius: 5,
          ...customStyle,
        }}
        {...props}
      />
      {error ? (
        <Text
          style={{
            marginLeft: 50,
            fontWeight: 'bold',
            fontSize: fontSizes.sm,
            color: colors.red.toString(),
            fontFamily: fontTypes.mainBold,
          }}
        >
          {errorText}
        </Text>
      ) : null}
      {infoText ? (
        <Text
          style={{
            marginLeft: 50,
            fontWeight: 'bold',
            fontSize: fontSizes.sm,
            color: color ? color.toString() : colors.primaryLight,
            fontFamily: fontTypes.mainBold,
          }}
        >
          {infoText}
        </Text>
      ) : null}
    </View>
  );
};

MainTextInput.defaultProps = {
  style: {},
  onChange: () => null,
  name: 'input',
  error: false,
  errorText: '',
  label: 'Type here',
  infoText: null,
  initialValue: '',
  value: null,
  keyboardType: 'default',
  color: colors.black,
  iconType: 'FontAwesome',
  iconName: 'pencil-square-o',
  small: false,
};

MainTextInput.propTypes = {
  style: PropTypes.shape({}),
  onChange: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  infoText: PropTypes.string,
  initialValue: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  keyboardType: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  iconType: PropTypes.string,
  iconName: PropTypes.string,
  small: PropTypes.bool,
};

export default MainTextInput;
