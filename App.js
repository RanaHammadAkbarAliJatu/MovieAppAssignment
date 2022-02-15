

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./src/components/MainScreen/MainScreen";
import SecondScreen from "./src/components/SecondScreen/SecondScreen";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// export default (App = createStackNavigator(
  //   {
  //     MainScreen: { screen: MainScreen },
  //     SecondScreen: { screen: SecondScreen }
  //   },
  //   {
  //     navigationOptions: {
  //       headerBackTitle: null,
  //       headerStyle: { backgroundColor: "rgba(31.5, 10.5, 31.5, 1)" },
  //       headerTitleStyle: {
  //         color: "white",
  //         flex: 1,
  //         textAlign: "center",
  //         fontSize: 16
  //       },
  //      headerTintColor: "white"
  //     }
  //   }
  // ));