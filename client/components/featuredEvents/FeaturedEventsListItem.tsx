import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '../../constants/theme';
import DateBox from '../common/DateBox';
import { Event } from '../../types/types';

interface IFeaturedEventsListItemProps {
  item: Event;
  onPress: () => void;
}

const FeaturedEventsListItem = ({ item, onPress }: IFeaturedEventsListItemProps) => (
  <TouchableOpacity onPress={ onPress }>
    <ImageBackground
      source={ { uri: item.image } }
      borderRadius={ SIZES.size5 }
      style={ styles.container }
    >
      <View style={ styles.dateContainer }>
        <DateBox
          startingTime={ item.startingTime }
          colors={ [COLORS.white, COLORS.white] }
          textColor={ COLORS.black }
        />
      </View>
      <View style={ styles.bottomTextContainer }>
        <Text style={ styles.type }>{ item.type }</Text>
        <Text style={ styles.title }>{ item.title }</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 2 + 70,
    height: SIZES.width / 2 + 70,
    justifyContent: 'space-between',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: SIZES.size4,
    paddingTop: SIZES.size4,
  },
  bottomTextContainer: {
    marginLeft: SIZES.size5,
    marginBottom: SIZES.size5,
  },
  type: {
    ...FONTS.regular,
    color: COLORS.white,
    marginBottom: SIZES.size1,
    letterSpacing: 2,
    opacity: 0.65,
  },
  title: {
    ...FONTS.bold,
    fontSize: SIZES.size5,
    color: COLORS.white,
  },
});

export default FeaturedEventsListItem;
