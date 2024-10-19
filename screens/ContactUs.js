import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';  // Correct clipboard usage

// Function to copy text to clipboard
const copyToClipboard = (text) => {
  Clipboard.setStringAsync(text);  // Using expo-clipboard
  Alert.alert("Copied to clipboard", text);
};

const ContactUs = () => {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView 
        source={require('../assets/contactus.json')}  // Lottie animation path
        autoPlay 
        loop={false} 
        style={styles.animation} 
      />

      {/* Contact Details */}
      <View style={styles.contactContainer}>
        {/* Email */}
        <TouchableOpacity onPress={() => copyToClipboard('contact@truejust.org')}>
          <View style={styles.linkRow}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#6200ea" />
            <Text style={styles.linkText}>contact@truejust.org</Text>
          </View>
        </TouchableOpacity>

        {/* Website */}
        <TouchableOpacity onPress={() => copyToClipboard('www.truejust.org')}>
          <View style={styles.linkRow}>
            <MaterialCommunityIcons name="web" size={24} color="#6200ea" />
            <Text style={styles.linkText}>www.truejust.org</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  contactContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#6200ea',
    marginLeft: 10,
  },
});

export default ContactUs;
