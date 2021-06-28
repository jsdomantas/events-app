import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SIZES, FONTS, COLORS } from '../../constants/theme';
import { region, mapStyle } from '../../constants/map';

interface IEventDetailsDescriptionProps {
  description: string;
}

const EventDetailsDescription = ({ description }: IEventDetailsDescriptionProps) => (
  <View style={ styles.eventInfoBody }>
    <Text style={ styles.eventInfoHeading }>ABOUT</Text>
    <Text style={ styles.description }>{ description }</Text>
    <Text style={ styles.eventInfoHeading }>LOCATION</Text>
    <MapView
      provider={ PROVIDER_GOOGLE }
      minZoomLevel={ 15 }
      initialRegion={ region }
      customMapStyle={ mapStyle }
      style={ styles.mapView }
    />
    <View style={ styles.gutterBottom } />
  </View>
);

const styles = StyleSheet.create({
  eventInfoBody: {
    marginTop: SIZES.size7,
    paddingHorizontal: SIZES.size6,
  },
  eventInfoHeading: {
    ...FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.size4,
    letterSpacing: 1.5,
  },
  description: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size4,
    marginVertical: SIZES.size5,
    lineHeight: SIZES.size6,
  },
  mapView: {
    height: 250,
    borderRadius: SIZES.size5,
    marginTop: SIZES.size6,
  },
  gutterBottom: {
    paddingBottom: 200,
  },
});

export default EventDetailsDescription;
