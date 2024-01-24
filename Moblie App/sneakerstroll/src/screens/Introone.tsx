import React from 'react';
import { View, Text, Image, StyleSheet, ImageStyle } from 'react-native';

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackParamList} from "../App"

type IntrooneProps = NativeStackScreenProps<RootStackParamList, "Starting">

const Introone = ({navigation}:IntrooneProps) => {
  return (
    <View style={styles.onboard}>
      <View style={styles.overlapWrapper}>
        <View style={styles.overlap}>
          <Image style={styles.NIKE as ImageStyle} source={require('../assests/onBoard1.png')} />
          <View style={styles.group}>
            <View style={styles.ellipse} />
            <View style={styles.div} />
            <View style={styles.ellipse2} />
          </View>
          <Image style={styles.img as ImageStyle} source={require('../assests/Ellipse904.svg')} />
          <View style={styles.group2}>
            <View style={styles.group3}>
              <View style={styles.overlapGroupWrapper}>
                {/* <View style={styles.overlapGroup}>
                  <Image style={styles.digitalSketches as ImageStyle} source={require('../assests/onBoard1.png')} />
                  <Image style={styles.digitalSketches2 as ImageStyle} source={require('../assests/onBoard1.png')} />
                </View> */}
              </View>
              <View style={styles.group4}>
                {/* <Image style={styles.startJourneyWith as ImageStyle} source={require('../assests/onBoard1.png')} /> */}
                <Text style={styles.smartGorgeous}>Smart, Gorgeous & Fashionable Collection</Text>
              </View>
            </View>
            <View style={styles.group5}>
              <View style={styles.frame}>
                <Text style={styles.textWrapper}>Get Started</Text>
              </View>
              <View style={styles.group6}>
                <View style={styles.rectangle2} />
                <View style={styles.rectangle3} />
                <View style={styles.rectangle4} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboard: {
    backgroundColor: '#f8f9fa',
    flex: 1,
    justifyContent: 'center',
  },
  overlapWrapper: {
    backgroundColor: 'var(--lightframe-color)',
    height: 812,
    width: 375,
  },
  overlap: {
    height: 772,
    position: 'relative',
  },
  iphoneXSBars: {
    height: 44,
    position: 'absolute',
    top: 0,
    width: 375,
  },
  action: {
    height: 18,
    left: 25,
    position: 'absolute',
    top: 14,
    width: 32,
  },
  time: {
    color: 'var(--lighttext-color)',
    fontFamily: 'SF Pro Display-Semibold, Helvetica',
    fontSize: 15,
    fontWeight: '400',
    left: 0,
    letterSpacing: -0.17,
    lineHeight: 18,
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    // whiteSpace: 'nowrap',
  },
  container: {
    height: 12,
    left: 298,
    position: 'absolute',
    top: 17,
    width: 67,
  },
  battery: {
    backgroundColor: 'var(--lighttext-color)',
    height: 12,
    left: 42,
    position: 'absolute',
    top: 0,
    width: 24,
  },
  rectangle: {
    backgroundColor: 'var(--lighttext-color)',
    borderRadius: 1.6,
    height: 10,
    left: 1,
    position: 'relative',
    top: 1,
    width: 20,
  },
  combinedShape: {
    height: 11,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 17,
  },
  wifi: {
    height: 11,
    left: 22,
    position: 'absolute',
    top: 0,
    width: 15,
  },
  NIKE: {
    height: 120,
    left: 18,
    position: 'absolute',
    top: 191,
    width: 339,
  },
  group: {
    height: 311,
    left: 20,
    position: 'absolute',
    top: 146,
    width: 315,
  },
  ellipse: {
    backgroundColor: 'var(--lightprimary-color)',
    borderRadius: 6.5,
    height: 13,
    left: 0,
    position: 'absolute',
    top: 298,
    width: 13,
  },
  div: {
    backgroundColor: 'var(--lightprimary-color)',
    borderRadius: 6.5,
    height: 13,
    left: 302,
    position: 'absolute',
    top: 246,
    width: 13,
  },
  ellipse2: {
    backgroundColor: '#a4cdf6',
    borderRadius: 8,
    height: 16,
    left: 27,
    position: 'absolute',
    top: 0,
    width: 16,
  },
  img: {
    height: 207,
    left: 194,
    position: 'absolute',
    top: 0,
    width: 181,
  },
  group2: {
    height: 639,
    position: 'absolute',
    top: 133,
    width: 375,
  },
  group3: {
    height: 539,
    position: 'absolute',
    top: 0,
    width: 375,
  },
  overlapGroupWrapper: {
    height: 321,
    position: 'absolute',
    top: 0,
    width: 375,
  },
  overlapGroup: {
    height: 421,
    position: 'relative',
  },
  digitalSketches: {
    height: 394,
    left: 0,
    position: 'absolute',
    top: 27,
    width: 375,
  },
  digitalSketches2: {
    height: 257,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 360,
  },
  group4: {
    height: 184,
    left: 20,
    position: 'absolute',
    top: 355,
    width: 341,
  },
  startJourneyWith: {
    height: 86,
    left: 1,
    position: 'absolute',
    top: 13,
    width: 254,
  },
  smartGorgeous: {
    color: 'var(--lightsub-text-color)',
    fontFamily: 'Airbnb Cereal App-Book, Helvetica',
    fontSize: 20,
    fontWeight: '400',
    left: 0,
    letterSpacing: 0,
    lineHeight: 32,
    position: 'absolute',
    top: 120,
    width: 322,
  },
  group5: {
    height: 54,
    left: 20,
    position: 'absolute',
    top: 585,
    width: 335,
  },
  frame: {
    alignItems: 'flex-start',
    backgroundColor: 'var(--lightprimary-color)',
    borderRadius: 50,
    // display: 'inline-flex',
    gap: 8,
    left: 170,
    padding: 16,
    position: 'absolute',
    top: 0,
  },
  textWrapper: {
    color: 'var(--lightbg-color)',
    fontFamily: 'Airbnb Cereal App-Medium, Helvetica',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 22,
    marginTop: -1,
    position: 'relative',
    // whiteSpace: 'nowrap',
  },
  group6: {
    height: 5,
    left: 0,
    position: 'absolute',
    top: 25,
    width: 67,
  },
  rectangle2: {
    backgroundColor: 'var(--lightprimary-color)',
    borderRadius: 16,
    height: 5,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 35,
  },
  rectangle3: {
    backgroundColor: '#e5eef7',
    borderRadius: 16,
    height: 5,
    left: 43,
    position: 'absolute',
    top: 0,
    width: 8,
  },
  rectangle4: {
    backgroundColor: '#e5eef7',
    borderRadius: 16,
    height: 5,
    left: 59,
    position: 'absolute',
    top: 0,
    width: 8,
  },
});

export default Introone;
