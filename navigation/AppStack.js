import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Import the screens
import { HomeScreen } from '../screens/HomeScreen';
import { ComingSoonScreen as MyValuesScreen } from '../screens/Values';
import { ComingSoonScreen as CandidateScreen } from '../screens/CandidatePage';
import { ComingSoonScreen as TrackingScreen } from '../screens/TrackingPage';
import { ComingSoonScreen as SummaryScreen } from '../screens/SummaryPage';
import ContactUs from '../screens/ContactUs';  // Your Contact Us screen
import FAQ from '../screens/FaQ';  // Your FAQ screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// This function creates your Home stack navigation
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MyValues" component={MyValuesScreen} />
      <Stack.Screen name="Candidate" component={CandidateScreen} />
      <Stack.Screen name="Tracking" component={TrackingScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
};

// Main App Stack with Bottom Tab Navigation
export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#6200ea' },
        tabBarActiveTintColor: '#fff',
      }}
    >
      <Tab.Screen 
        name="         Just Politics | Value Based Voting" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Contact Us" 
        component={ContactUs} 
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="FAQ" 
        component={FAQ} 
        options={{
          tabBarLabel: 'FAQ',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="help-circle" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
};
