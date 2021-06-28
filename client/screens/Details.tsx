import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { COLORS } from '../constants/theme';
import EventDetailsHeader from '../components/eventDetails/EventDetailsHeader';
import EventDetailsDescription from '../components/eventDetails/EventDetailsDescription';
import EventDetailsBottomTray from '../components/eventDetails/EventDetailsBottomTray';
import { useBuyTickets } from '../hooks/tickets/mutations';
import { useEventDetails } from '../hooks/events/queries';
import { useLikeEvent, useUnlikeEvent } from '../hooks/events/mutations';
import { RootStackParamList } from '../App';

export interface IDetailsProps {
  navigation: StackNavigationProp<RootStackParamList, 'Details'>;
  route: RouteProp<RootStackParamList, 'Details'>
}

const Details = ({ route, navigation }: IDetailsProps) => {
  const { id } = route.params;

  const eventQuery = useEventDetails(id);
  const ticketsPurchaseMutation = useBuyTickets(id);
  const eventLikeMutation = useLikeEvent(id);
  const eventUnlikeMutation = useUnlikeEvent(id);

  if (eventQuery.isLoading) {
    return <ActivityIndicator testID="EventDetails-LoadingSpinner" />;
  }

  const toggleLikeAction = eventQuery.data?.liked ? eventUnlikeMutation.mutate : eventLikeMutation.mutate;

  const purchaseTickets = () => {
    if (eventQuery.data?.purchased) return;

    ticketsPurchaseMutation.mutate();
  };

  return (
    <View style={ styles.container }>
      <ScrollView scrollIndicatorInsets={ { right: 1 } }>
        <EventDetailsHeader
          event={ eventQuery.data! }
          onBackPress={ navigation.goBack }
          isLiked={ eventQuery.data?.liked! }
          onLikePress={ toggleLikeAction }
        />
        <EventDetailsDescription description={ eventQuery.data?.description! } />
      </ScrollView>
      <EventDetailsBottomTray
        price={ eventQuery.data?.price! }
        isPurchased={ eventQuery.data?.purchased! }
        onPurchase={ purchaseTickets }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Details;
