// AppNavigator.js

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/app';
import NotFoundScreen from '@/app/+not-found';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="index" component={HomeScreen} />
      <Stack.Screen name="_sitemap" component={SitemapScreen} />*/}
      <Stack.Screen name="index" component={HomeScreen} />
      <Stack.Screen name="+not-found" component={NotFoundScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
