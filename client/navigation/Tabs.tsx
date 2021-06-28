import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import Featured from '../screens/Featured';
import Tickets from '../screens/Tickets';

export type TabsParamList = {
  Featured: undefined;
  Tickets: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

const Tabs = () => (
  <Tab.Navigator
    tabBarOptions={ {
      style: {
        backgroundColor: COLORS.tabBar,
        borderTopColor: COLORS.black,
        paddingTop: SIZES.size2,
      },
    } }
  >
    <Tab.Screen
      name="Featured"
      component={ Featured }
      options={ {
        tabBarLabel: ({ focused }) => (
          <TabLabel isFocused={ focused } text="Featured" />
        ),
      } }
    />
    <Tab.Screen
      name="Tickets"
      component={ Tickets }
      options={ {
        tabBarLabel: ({ focused }) => (
          <TabLabel isFocused={ focused } text="Tickets" />
        ),
      } }
    />
  </Tab.Navigator>
);

interface ITabLabelProps {
  text: string;
  isFocused: boolean;
}

const TabLabel = ({ text, isFocused }: ITabLabelProps) => (
  <Text style={ [styles.tabBarLabel, { opacity: isFocused ? 1 : 0.5 }] }>{ text }</Text>
);

const styles = StyleSheet.create({
  tabBarLabel: {
    ...FONTS.h4,
    color: COLORS.white,
  },
});

export default Tabs;
