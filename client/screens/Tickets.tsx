import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { COLORS } from '../constants/theme';
import { useTickets } from '../hooks/tickets/queries';
import TicketsList from '../components/tickets/TicketsList';
import { TabsParamList } from '../navigation/Tabs';

interface ITicketsProps {
  navigation: BottomTabNavigationProp<TabsParamList, 'Tickets'>
}

const Tickets = ({ navigation }: ITicketsProps) => {
  const [searchResults, setSearchResults] = useState([]);
  const ticketsQuery = useTickets();

  const searchOptions = {
    keys: ['title', 'price', 'type', 'startingTime'],
  };

  if (ticketsQuery.isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={ styles.container }>
      <TicketsList
        tickets={ searchResults.length ? searchResults : ticketsQuery.data! }
        onItemPress={ navigation.navigate }
        setSearchResults={ setSearchResults }
        searchOptions={ searchOptions }
        allItems={ ticketsQuery.data }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Tickets;
