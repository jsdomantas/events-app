import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import DateBox from '../common/DateBox';
import { SIZES, FONTS, COLORS } from '../../constants/theme';
import { Event } from '../../types/types';

interface ITicketsListItemProps {
  item: Event;
  onItemPress: (title: string, params: { id: string }) => void;
}

const TicketsListItem = ({ item, onItemPress }: ITicketsListItemProps) => (
  <TouchableOpacity
    style={ styles.listItem }
    onPress={ () => onItemPress('Details', { id: item.id }) }
  >
    <DateBox startingTime={ item.startingTime } />
    <View style={ styles.detailsContainer }>
      <View>
        <Text style={ styles.eventType }>{ item.type }</Text>
        <Text style={ styles.eventTitle }>{ item.title }</Text>
      </View>
      <Text style={ styles.eventPrice }>{ `$${item.price.toFixed(2)}` }</Text>
    </View>
    <Entypo
      name="chevron-thin-right"
      size={ 24 }
      color="white"
      style={ styles.icon }
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.size4,
  },
  eventType: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size3,
    marginBottom: SIZES.size1,
    opacity: 0.7,
    letterSpacing: 2,
  },
  eventTitle: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  eventPrice: {
    ...FONTS.h4,
    color: COLORS.white,
  },
  icon: {
    marginLeft: 'auto',
  },
});

export default TicketsListItem;
