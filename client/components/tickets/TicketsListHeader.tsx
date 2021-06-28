import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SearchInput from '../common/SearchInput';
import { FONTS, SIZES, COLORS } from '../../constants/theme';
import { Event } from '../../types/types';

interface ITicketsListHeaderProps {
  searchOptions: { keys: Array<string> };
  setSearchResults: (events: Array<Event>) => void;
  allItems: Array<Event>;
}

const TicketsListHeader = ({ searchOptions, setSearchResults, allItems }: ITicketsListHeaderProps) => (
  <View>
    <Text style={ [styles.heading, styles.gutter] }>Your tickets</Text>
    <SearchInput
      searchOptions={ searchOptions }
      setSearchResults={ setSearchResults }
      allItems={ allItems }
      style={ styles.gutter }
    />
  </View>
);

const styles = StyleSheet.create({
  heading: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  gutter: {
    marginBottom: SIZES.size6,
  },
});

export default TicketsListHeader;
