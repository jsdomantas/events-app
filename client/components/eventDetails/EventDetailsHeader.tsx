import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  Platform,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import moment from 'moment';
import { backArrow } from '../../constants/icons';
import DateBox from '../common/DateBox';
import { SIZES, COLORS, FONTS } from '../../constants/theme';
import { Event } from '../../types/types';

interface IEventDetailsHeaderProps {
  event: Event;
  onBackPress: () => void;
  isLiked: boolean;
  onLikePress: () => void;
}

const EventDetailsHeader = ({
  event,
  onBackPress,
  isLiked,
  onLikePress,
}: IEventDetailsHeaderProps) => (
  <ImageBackground
    source={ { uri: event.image } }
    resizeMode="cover"
    style={ styles.backgroundImage }
  >
    <View style={ styles.iconsContainer }>
      <TouchableOpacity
        style={ styles.iconContainer }
        onPress={ onBackPress }
      >
        <Image
          source={ backArrow }
          style={ styles.icon }
        />
      </TouchableOpacity>
      <View style={ styles.rightSideIconsContainer }>
        <TouchableOpacity
          style={ styles.iconContainer }
          onPress={ onLikePress }
          testID="EventDetails-LikeBtn"
        >
          <FontAwesome
            name={ isLiked ? 'heart' : 'heart-o' }
            size={ 32 }
            color={ COLORS.white }
          />
        </TouchableOpacity>
      </View>
    </View>
    <LinearGradient
      colors={ ['transparent', '#000'] }
      start={ { x: 0, y: 0 } }
      end={ { x: 0, y: 1 } }
      style={ styles.backgroundGradient }
    >
      <View style={ styles.eventInfoHeader }>
        <View>
          <Text style={ styles.eventType }>{ event.type }</Text>
          <Text style={ styles.eventName }>{ event.title }</Text>
          <Text style={ styles.eventStartTime }>{ `STARTING ${moment(new Date(event.startingTime)).format('hh:mm A')}` }</Text>
        </View>
        <DateBox startingTime={ event.startingTime } />
      </View>
    </LinearGradient>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.size6,
    marginTop: Platform.OS === 'ios' ? SIZES.size9 : SIZES.size4,
  },
  rightSideIconsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.black,
    opacity: 0.7,
    borderRadius: SIZES.size5,
  },
  iconContainer: {
    backgroundColor: COLORS.black,
    opacity: 0.7,
    borderRadius: SIZES.size5,
    paddingVertical: SIZES.size2,
    paddingHorizontal: SIZES.size4,
  },
  icon: {
    height: 32,
    width: 32,
  },
  backgroundGradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  eventInfoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.size6,
  },
  eventType: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size4,
    opacity: 0.7,
    letterSpacing: 2,
  },
  eventName: {
    ...FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.size7,
    marginVertical: SIZES.size2,
  },
  eventStartTime: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size4,
    opacity: 0.7,
    letterSpacing: 1.5,
  },
});

export default EventDetailsHeader;
