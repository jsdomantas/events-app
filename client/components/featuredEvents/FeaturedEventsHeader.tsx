import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import moment from 'moment';
import { FONTS, COLORS, SIZES } from '../../constants/theme';
import SearchInput from '../common/SearchInput';
import { Event } from '../../types/types';

interface IFeaturedEventsHeaderProps {
  style: ViewStyle;
  allItems: Array<Event>;
  searchOptions: { keys: Array<string> };
  setSearchResults: (value: Array<Event>) => void;
}

const FeaturedEventsHeader = ({
  style,
  allItems,
  searchOptions,
  setSearchResults,
}: IFeaturedEventsHeaderProps) => (
  <View>
    <View style={ style }>
      <Text style={ styles.date }>{ moment(new Date()).format('MMMM DD') }</Text>
      <Text style={ styles.heading }>Explore events</Text>
    </View>
    <SearchInput
      allItems={ allItems }
      searchOptions={ searchOptions }
      style={ style }
      setSearchResults={ setSearchResults }
    />
  </View>
);

const styles = StyleSheet.create({
  date: {
    ...FONTS.regular,
    color: COLORS.gray,
    marginBottom: SIZES.size2,
    letterSpacing: 2,
  },
  heading: {
    ...FONTS.h1,
    color: COLORS.white,
  },
});

export default FeaturedEventsHeader;
