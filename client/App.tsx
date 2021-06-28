import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { QueryClientProvider } from 'react-query';
import queryClient from './utils/queryClient';
import customFonts from './constants/fonts';
import Details from './screens/Details';
import Tabs from './navigation/Tabs';

export type RootStackParamList = {
  Featured: undefined;
  Details: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  const loadAssetsAsync = async () => {
    await Font.loadAsync(customFonts);
    setAssetsLoaded(true);
  };

  useEffect(() => {
    loadAssetsAsync();
  }, []);

  if (!assetsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <QueryClientProvider client={ queryClient }>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator screenOptions={ {
          headerShown: false,
        } }
        >
          <Stack.Screen name="Featured" component={ Tabs } />
          <Stack.Screen name="Details" component={ Details } />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
