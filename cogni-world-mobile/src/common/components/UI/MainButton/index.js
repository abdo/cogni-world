import React from 'react';
import { Button, Spinner, Text } from 'native-base';
import { colors, gaps, dimensions } from '../../../../assets/styles/base';

const MainButton = ({
  secondary,
  wide,
  isLoading,
  icon,
  children: text,
  style: customStyle,
  ...props
}) => (
  <Button
    rounded
    block={wide}
    style={{
      backgroundColor: secondary ? colors.secondary : colors.primary,
      padding: gaps.sm,
      maxWidth: dimensions.fullWidth * 0.9,
      alignSelf: 'center',
      ...customStyle,
    }}
    {...props}
  >
    {text ? <Text style={{ fontWeight: 'bold' }}>{text}</Text> : null}
    {isLoading ? (
      <Spinner
        color={
            secondary ? colors.white.toString() : colors.secondary.toString()
          }
      />
    ) : icon || null}
  </Button>
);

export default MainButton;
