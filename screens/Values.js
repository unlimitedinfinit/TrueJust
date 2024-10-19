import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LottieView from 'lottie-react-native';  // Import Lottie

const { width, height } = Dimensions.get("window");

export const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/progress.json')}  // Reference your progress.json file
        autoPlay
        loop
        style={styles.animation}
      />

      {/* Coming Soon Message */}
      <Text style={styles.text}>Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  animation: {
    width: width * 0.8,  // Adjust width for animation
    height: height * 0.4,  // Adjust height for animation
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6200ea",  // Purple tone
    marginTop: 20,  // Space between animation and text
    textAlign: "center",
  },
});

export default ComingSoonScreen;
