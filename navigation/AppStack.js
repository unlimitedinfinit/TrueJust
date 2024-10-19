import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Import the screens
import { HomeScreen } from "../screens/HomeScreen";
import { ComingSoonScreen as MyValuesScreen } from "../screens/Values";
import { ComingSoonScreen as CandidateScreen } from "../screens/CandidatePage";
import { ComingSoonScreen as TrackingScreen } from "../screens/TrackingPage";
import { ComingSoonScreen as SummaryScreen } from "../screens/SummaryPage";

const Stack = createStackNavigator();

export const AppStack = () => {
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
