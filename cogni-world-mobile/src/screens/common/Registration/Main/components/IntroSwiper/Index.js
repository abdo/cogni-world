import { StyleSheet, Image } from 'react-native';
import { View, Text } from 'native-base';
import React from 'react';
import SwiperFlatList from 'react-native-swiper-flatlist';

import { colors, dimensions, gaps } from '../../../../../../assets/styles/base';
import MainText from '../../../../../../common/components/UI/Text/MainText';

const logo = require('../../../../../../assets/images/logo-white.png');

const IntroSwiper = () => (
  <View
    style={{
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: gaps.md,
    }}
  >
    <SwiperFlatList
      autoplay
      showPagination
      style={{ width: dimensions.fullWidth * 0.8 }}
    >
      <View style={styles.child}>
        <MainText style={{ color: colors.white }}>
          What is Cogni World? 🤔
        </MainText>
        <Image style={{ width: 100, height: 100 }} source={logo} />
      </View>
      <View style={styles.child}>
        <MainText style={{ color: colors.white }}>
          It&apos;s time for Cognis to have their own world
        </MainText>
        <Text>🗺 </Text>
      </View>
      <View style={styles.child}>
        <MainText style={{ color: colors.white, textAlign: 'center' }}>
          No problem about catering anymore, you can even change the meal you
          ordered on the same day, without notifying People Operation.. and
          more.
        </MainText>
      </View>
    </SwiperFlatList>
  </View>
);

export default IntroSwiper;

const styles = StyleSheet.create({
  child: {
    width: dimensions.fullWidth * 0.8,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: colors.white.fade(0.9),
  },
});
