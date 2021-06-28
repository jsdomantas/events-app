import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import FeaturedEventsListItem from './FeaturedEventsListItem';
import { SIZES, COLORS, FONTS } from '../../constants/theme';
import { Event } from '../../types/types';

interface IFeaturedEventsListProps {
  data: Array<Event>;
  title: string;
  onPress: (title: string, params: { id: string }) => void;
  style?: ViewStyle;
}

const FeaturedEventsList = ({
  data,
  title,
  onPress,
  style,
}: IFeaturedEventsListProps) => (
  <View>
    <Text style={ styles.title }>{ title }</Text>
    <FlatList
      data={ data }
      keyExtractor={ (item) => item.id }
      renderItem={ ({ item }) => (
        <FeaturedEventsListItem
          item={ item }
          onPress={ () => onPress('Details', { id: item.id }) }
        />
      ) }
      ItemSeparatorComponent={ () => <View style={ styles.gutter } /> }
      showsHorizontalScrollIndicator={ false }
      horizontal
      style={ style }
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    ...FONTS.bold,
    letterSpacing: 1,
    marginBottom: SIZES.size3,
    color: COLORS.white,
  },
  gutter: {
    marginRight: SIZES.size6,
  },
});

export default FeaturedEventsList;
