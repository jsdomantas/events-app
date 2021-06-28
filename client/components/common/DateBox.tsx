import React from 'react';
import { StyleSheet, Text } from 'react-native';
import moment from 'moment';
import { LinearGradient } from 'expo-linear-gradient';
import { SIZES, FONTS, COLORS } from '../../constants/theme';

interface IDateBoxProps {
  startingTime: string;
  textColor?: string;
  colors?: Array<string>;
}

const DateBox = ({ startingTime, textColor = COLORS.white, colors = COLORS.linear }: IDateBoxProps) => (
  <LinearGradient
    colors={ colors }
    start={ { x: 0, y: 0 } }
    end={ { x: 1, y: 1 } }
    style={ styles.dateContainer }
  >
    <Text style={ [styles.month, { color: textColor }] }>{ moment(new Date(startingTime)).format('MMM').toUpperCase() }</Text>
    <Text style={ [styles.day, { color: textColor }] }>{ moment(new Date(startingTime)).format('DD') }</Text>
  </LinearGradient>
);

const styles = StyleSheet.create({
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.size5,
    paddingHorizontal: SIZES.size5,
    paddingVertical: SIZES.size3,
  },
  month: {
    ...FONTS.bold,
    letterSpacing: 2,
    fontSize: SIZES.size4,
  },
  day: {
    ...FONTS.bold,
    fontSize: SIZES.size6,
  },
});

export default DateBox;
