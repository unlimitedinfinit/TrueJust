import React, { useContext, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Text, Checkbox } from "react-native-paper";  
import * as Animatable from 'react-native-animatable';  
import LottieView from 'lottie-react-native';  
import { useNavigation } from "@react-navigation/native";  

import { AuthenticatedUserContext } from "../providers/AuthenticatedUserProvider";

const { width } = Dimensions.get("window");  

export const HomeScreen = () => {
  const { user } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();

  // Checkbox states for each section
  const [valuesChecked, setValuesChecked] = useState(false);
  const [candidatesChecked, setCandidatesChecked] = useState(false);
  const [trackingChecked, setTrackingChecked] = useState(false);
  const [resultsChecked, setResultsChecked] = useState(false);

  return (
    <View style={styles.container}>
      {/* Updated Welcome Text */}
      <Animatable.Text 
        animation="fadeInDown" 
        delay={150} 
        style={styles.welcomeText}
      >
        Welcome {user?.email ? user.email : "Guest"} to Just Politics!
      </Animatable.Text>

      {/* Instructions */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
          Start by setting your political values, exploring candidates, and viewing the results that match your preferences.
        </Text>
      </Animatable.View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {/* My Values Section */}
        <TouchableOpacity 
          style={styles.lottieContainer} 
          onPress={() => {
            navigation.navigate("MyValues");
            setValuesChecked(true);
          }}
        >
          <LottieView
            source={require('../assets/thinkingValues.json')}  
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.lottieText}>Set Political Values</Text>
          <Checkbox 
            status={valuesChecked ? "checked" : "unchecked"} 
            onPress={() => setValuesChecked(!valuesChecked)}
            uncheckedColor="#6200ea"  // Set the border color of unchecked checkbox
            color="#6200ea"           // Set the color of checked checkbox
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} // Increase size
          /> 
        </TouchableOpacity>

        {/* Candidates Section */}
        <TouchableOpacity 
          style={styles.lottieContainer} 
          onPress={() => {
            navigation.navigate("Candidate");
            setCandidatesChecked(true);
          }}
        >
          <LottieView
            source={require('../assets/candidate.json')}  
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.lottieText}>Review Candidates</Text>
          <Checkbox 
            status={candidatesChecked ? "checked" : "unchecked"} 
            onPress={() => setCandidatesChecked(!candidatesChecked)} 
            uncheckedColor="#6200ea"  
            color="#6200ea"           
          />
        </TouchableOpacity>

        {/* Tracking (Oversight) Section */}
        <TouchableOpacity 
          style={styles.lottieContainer} 
          onPress={() => {
            navigation.navigate("Tracking");
            setTrackingChecked(true);
          }}
        >
          <LottieView
            source={require('../assets/magnify.json')}  
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.lottieText}>Oversight and Accountability</Text>
          <Checkbox 
            status={trackingChecked ? "checked" : "unchecked"} 
            onPress={() => setTrackingChecked(!trackingChecked)} 
            uncheckedColor="#6200ea"  
            color="#6200ea"           
          />
        </TouchableOpacity>

        {/* View Results Section */}
        <TouchableOpacity 
          style={styles.lottieContainer} 
          onPress={() => {
            navigation.navigate("Summary");
            setResultsChecked(true);
          }}
        >
          <LottieView
            source={require('../assets/vote.json')}  
            autoPlay
            loop
            style={styles.lottie}
          />
          <Text style={styles.lottieText}>View Results</Text>
          <Checkbox 
            status={resultsChecked ? "checked" : "unchecked"} 
            onPress={() => setResultsChecked(!resultsChecked)} 
            uncheckedColor="#6200ea"  
            color="#6200ea"           
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingTop: 50,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
    marginTop: 10,
  },
  instructionsContainer: {
    width: width * 0.8,
    backgroundColor: "#fff",
    padding: 4,
    borderRadius: 5,
    marginBottom: 1,
    elevation: 4,
  },
  instructions: {
    fontSize: 10,
    color: "#555",
    lineHeight: 20,
    textAlign: "center",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  lottieContainer: {
    width: width * 0.75,
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  lottie: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  lottieText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
});
