import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SIZES, FONTS, COLORS } from '../../constants/theme';
import { buyTicket } from '../../constants/icons';

interface IEventDetailsBottomTrayProps {
  price: number;
  isPurchased: boolean;
  onPurchase: () => void;
}

const EventDetailsBottomTray = ({ price, isPurchased, onPurchase }: IEventDetailsBottomTrayProps) => (
  <View style={ styles.fixedBottomBar }>
    <View style={ styles.row }>
      <View>
        <Text style={ styles.priceHeading }>PRICE</Text>
        <Text style={ styles.price }>{ `$${price.toFixed(2)}` }</Text>
      </View>
      <TouchableOpacity
        onPress={ onPurchase }
        testID="EventDetails-PurchaseTicketBtn"
      >
        <LinearGradient
          colors={ COLORS.linear }
          start={ { x: 0, y: 0 } }
          end={ { x: 1, y: 1 } }
          style={ styles.buttonContainer }
        >
          {
            isPurchased
              ? <Text style={ styles.buttonActionText }>TICKET BOUGHT</Text> : (
                <>
                  <Text style={ styles.buttonActionText }>BUY A TICKET</Text>
                  <Image source={ buyTicket } style={ styles.icon } />
                </>
              )
          }
        </LinearGradient>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  fixedBottomBar: {
    paddingVertical: SIZES.size5,
    width: SIZES.width,
    borderRadius: SIZES.size5,
    backgroundColor: COLORS.tabBar,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SIZES.size8,
  },
  priceHeading: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size4,
    opacity: 0.5,
    letterSpacing: 1.5,
    marginBottom: SIZES.size1,
  },
  price: {
    ...FONTS.regular,
    color: COLORS.white,
    fontSize: SIZES.size6,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: SIZES.size5,
    borderRadius: SIZES.size5,
  },
  buttonActionText: {
    ...FONTS.bold,
    color: COLORS.white,
    fontSize: SIZES.size4,
    letterSpacing: 2,
  },
  icon: {
    height: 32,
    width: 32,
    marginLeft: SIZES.size4,
  },
});

export default EventDetailsBottomTray;
