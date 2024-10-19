import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { Button, Text } from "react-native-paper";  
import * as Animatable from 'react-native-animatable';  
import LottieView from 'lottie-react-native';  
import { useNavigation } from "@react-navigation/native";  

import { signOut } from "firebase/auth";
import { auth } from "../config";
import { AuthenticatedUserContext } from "../providers/AuthenticatedUserProvider";

// Get screen width for styling
const { width } = Dimensions.get("window");  

// Import the background image from assets
const backgroundImage = require('../assets/america2.jpg');  // Replace with your file name

export const HomeScreen = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.log("Error logging out: ", error));
  };

  return (
    // Use ImageBackground to add a background image
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="stretch">
      <View style={styles.container}>
        {/* Lottie Animation */}
        <LottieView
          source={require('../assets/working.json')}  
          autoPlay
          loop
          style={styles.animation}
        />

        {/* Animated Welcome Message */}
        <Animatable.Text 
          animation="fadeInDown" 
          delay={150} 
          style={styles.welcomeText}
        >
          Welcome to Just Liberty Inc: Just Politics
        </Animatable.Text>

        <Animatable.Text 
          animation="fadeInUp" 
          delay={500} 
          style={styles.userText}
        >
          {user?.email ? user.email : "Guest"} {"\n\n"}
          Start by defining your political values, explore candidate options, and track their progress.
        </Animatable.Text>

        {/* Navigation Buttons */}
        <Animatable.View animation="fadeInUp" delay={700} style={styles.buttonContainer}>
          <Button 
            mode="contained" 
            icon="book" 
            onPress={() => navigation.navigate("MyValues")} 
            style={styles.button}
          >
            My Values
          </Button>

          <Button 
            mode="contained" 
            icon="account-group"  
            onPress={() => navigation.navigate("Candidate")} 
            style={styles.button}
          >
            Candidates
          </Button>

          <Button 
            mode="contained" 
            icon="file-chart"  
            onPress={() => navigation.navigate("Tracking")} 
            style={styles.button}
          >
            Tracking $
          </Button>

          <Button 
            mode="contained" 
            icon="chart-bar"  
            onPress={() => navigation.navigate("Summary")} 
            style={styles.button}
          >
            View Results
          </Button>
        </Animatable.View>

        {/* Sign Out Button */}
        <Button 
          mode="text" 
          onPress={handleLogout} 
          style={styles.signOutButton}
        >
          Sign Out
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",  // Optional dark overlay
  },
  animation: {
    position: "absolute",
    width: width,  
    height: "100%",  
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#fff",  
    textShadowColor: 'rgba(0, 0, 0, 0.75)',  
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  userText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 150,
    color: "#fff",  
    textShadowColor: 'rgba(0, 0, 0, 0.75)',  
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    width: "100%",   // Ensure the container takes up full width
    alignItems: "flex-start",  // Align buttons to the left
    paddingHorizontal: 20,  // Left padding for spacing
  },
  button: {
    marginVertical: 10,
    width: 200,  // Set a fixed width for buttons
    backgroundColor: "#6200ea",
    padding: 10,
    justifyContent: 'flex-start',  // Align text to the left
  },
  
  
  signOutButton: {
    marginTop: 30,
    color: "#f44336",  
  },
});
