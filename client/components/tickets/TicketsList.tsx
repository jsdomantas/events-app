import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SIZES } from '../../constants/theme';
import TicketsListHeader from './TicketsListHeader';
import TicketsListItem from './TicketsListItem';
import { Event } from '../../types/types';

interface ITicketsListProps {
  tickets: Array<Event>;
  onItemPress: () => void;
  searchOptions: { keys: Array<string> };
  setSearchResults: (value: Array<Event>) => void;
  allItems: Array<Event>;
}

const TicketsList = ({
  tickets,
  onItemPress,
  searchOptions,
  setSearchResults,
  allItems,
}: ITicketsListProps) => (
  <FlatList
    data={ tickets }
    keyExtractor={ (item) => item.id }
    contentContainerStyle={ styles.container }
    ListHeaderComponent={ () => (
      <TicketsListHeader
        searchOptions={ searchOptions }
        setSearchResults={ setSearchResults }
        allItems={ allItems }
      />
    ) }
    renderItem={ ({ item }) => (
      <TicketsListItem
        onItemPress={ onItemPress }
        item={ item }
      />
    ) }
    ItemSeparatorComponent={ () => <View style={ styles.gutter } /> }
  />
);

const styles = StyleSheet.create({
  container: {
    padding: SIZES.size4,
  },
  gutter: {
    marginBottom: SIZES.size6,
  },
});

export default TicketsList;
