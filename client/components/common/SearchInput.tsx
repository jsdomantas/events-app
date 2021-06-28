import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ViewStyle,
} from 'react-native';
import Fuse from 'fuse.js';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import { search } from '../../constants/icons';
import { Event } from '../../types/types';

interface ISearchInputProps {
  style: ViewStyle;
  allItems: Array<Event>;
  searchOptions: { keys: Array<string> };
  setSearchResults: (results: Array<Event>) => void;
}

const SearchInput = ({
  style,
  allItems,
  searchOptions,
  setSearchResults,
}: ISearchInputProps) => {
  const [value, setValue] = useState('');

  const fuse = new Fuse(allItems, searchOptions);

  const handleSearch = () => {
    const results = fuse.search(value);
    const resultsMapped = results.map((result) => result.item);
    setSearchResults(resultsMapped);
  };

  return (
    <View style={ [styles.container, style] }>
      <Image
        source={ search }
        style={ styles.icon }
      />
      <TextInput
        placeholder="Search"
        value={ value }
        onChangeText={ setValue }
        onEndEditing={ handleSearch }
        autoCorrect={ false }
        placeholderTextColor={ COLORS.gray1 }
        style={ styles.input }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.size3,
    backgroundColor: COLORS.input,
    borderRadius: SIZES.size4,
  },
  icon: {
    height: SIZES.size7,
    width: SIZES.size7,
    marginRight: SIZES.size2,
  },
  input: {
    ...FONTS.regular,
    color: COLORS.white,
    flex: 1,
  },
});

export default SearchInput;
