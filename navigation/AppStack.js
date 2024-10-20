import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { signOut } from "firebase/auth";
import { auth } from "../config";

// Import the screens
import { HomeScreen } from '../screens/HomeScreen';
import { ComingSoonScreen as MyValuesScreen } from '../screens/Values';
import { ComingSoonScreen as CandidateScreen } from '../screens/CandidatePage';
import { ComingSoonScreen as TrackingScreen } from '../screens/TrackingPage';
import { ComingSoonScreen as SummaryScreen } from '../screens/SummaryPage';
import ContactUs from '../screens/ContactUs';
import FAQ from '../screens/FaQ';
import LoginScreen from '../screens/LoginScreen'; // Import your Login screen

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// This function creates your Home stack navigation
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false, // Disable the header for the Home screen
        }}
      />
      <Stack.Screen 
        name="MyValues" 
        component={MyValuesScreen} 
        options={{
          title: '', // Set empty title to avoid redundant "Home" text
          headerBackTitleVisible: false, // Only show the back arrow without text
        }}
      />
      <Stack.Screen 
        name="Candidate" 
        component={CandidateScreen} 
        options={{
          title: '', // Set empty title to avoid redundant "Home" text
          headerBackTitleVisible: false, // Only show the back arrow without text
        }}
      />
      <Stack.Screen 
        name="Tracking" 
        component={TrackingScreen} 
        options={{
          title: '', // Set empty title to avoid redundant "Home" text
          headerBackTitleVisible: false, // Only show the back arrow without text
        }}
      />
      <Stack.Screen 
        name="Summary" 
        component={SummaryScreen} 
        options={{
          title: '', // Set empty title to avoid redundant "Home" text
          headerBackTitleVisible: false, // Only show the back arrow without text
        }}
      />
    </Stack.Navigator>
  );
};

// Main App Stack with Bottom Tab Navigation
export const AppStack = ({ navigation }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
        navigation.replace("Login");  // Navigate to LoginScreen after successful logout
      })
      .catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#008080' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#f0f0f0'
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false, // Disable header at the top of the tab screen
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
        name="SignOut" 
        component={HomeStack}  // Use HomeStack, as we just need the listener to trigger logout
        listeners={{
          tabPress: (e) => {
            e.preventDefault();  // Prevent default navigation action
            handleLogout();      // Call the logout function
          },
        }}
        options={{
          tabBarLabel: 'Sign Out',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
