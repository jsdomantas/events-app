import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import FeaturedEventsHeader from '../components/featuredEvents/FeaturedEventsHeader';
import FeaturedEventsList from '../components/featuredEvents/FeaturedEventsList';
import { SIZES, COLORS } from '../constants/theme';
import { useEventsByStatus } from '../hooks/events/queries';
import { TabsParamList } from '../navigation/Tabs';
import { Event } from '../types/types';

interface IFeaturedProps {
  navigation: BottomTabNavigationProp<TabsParamList, 'Featured'>
}

const Featured = ({ navigation }: IFeaturedProps) => {
  const [searchResults, setSearchResults] = useState<Array<Event>>([]);

  const featuredEventsQuery = useEventsByStatus('featured');
  const popularEventsQuery = useEventsByStatus('popular');

  if (featuredEventsQuery.isLoading || popularEventsQuery.isLoading) {
    return <ActivityIndicator />;
  }

  const searchOptions = {
    keys: ['title', 'type'],
  };

  return (
    <SafeAreaView style={ styles.outerContainer }>
      <ScrollView contentContainerStyle={ styles.innerContainer }>
        <FeaturedEventsHeader
          style={ styles.gutter }
          searchOptions={ searchOptions }
          allItems={ featuredEventsQuery.data && popularEventsQuery.data ? [...featuredEventsQuery.data, ...popularEventsQuery.data] : [] }
          setSearchResults={ setSearchResults }
        />
        { searchResults.length ? (
          <FeaturedEventsList
            title="SEARCH RESULTS"
            data={ searchResults }
            onPress={ navigation.navigate }
            style={ styles.gutter }
          />
        ) : (
          <>
            <FeaturedEventsList
              title="FEATURED"
              data={ featuredEventsQuery.data! }
              onPress={ navigation.navigate }
              style={ styles.gutter }
            />
            <FeaturedEventsList
              title="POPULAR"
              data={ popularEventsQuery.data! }
              onPress={ navigation.navigate }
            />
          </>
        ) }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  innerContainer: {
    padding: SIZES.size4,
  },
  gutter: {
    marginBottom: SIZES.size6,
  },
});

export default Featured;
