// import React, { useState } from "react";
// import { StyleSheet, View } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/screens/Login';
// import Home from './src/screens/Home';
// import { AuthProvider, useAuth } from './src/contexts/AuthContext';

// import {
//   ViroARScene,
//   ViroARSceneNavigator,
//   ViroText,
//   ViroTrackingReason,
//   ViroTrackingStateConstants,
// } from "@reactvision/react-viro";

// const Stack = createNativeStackNavigator();

// const HelloWorldSceneAR = () => {
//   const [text, setText] = useState("Initializing AR...");
//   function onInitialized(state: any, reason: ViroTrackingReason) {
//     if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
//       setText("Hola Wey");
//     }
//   }
//   return (
//     <ViroARScene onTrackingUpdated={onInitialized}>
//       <ViroText
//         text={text}
//         scale={[0.5, 0.5, 0.5]}
//         position={[0, 0, -1]}
//         style={styles.helloWorldTextStyle}
//       />
//     </ViroARScene>
//   );
// };

// function ARScreen() {
//   return (
//     <ViroARSceneNavigator
//       autofocus={true}
//       initialScene={{ scene: HelloWorldSceneAR }}
//       style={{ flex: 1 }}
//     />
//   );
// }

// function MainNavigator() {
//   const { user } = useAuth();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!user ? (
//           <Stack.Screen name="LoginScreen" component={Login} options={{ headerShown: false }} />
//         ) : (
//           <>
//             <Stack.Screen name="HomeScreen" component={Home} />
//             <Stack.Screen name="ARScreen" component={ARScreen} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <MainNavigator />
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   helloWorldTextStyle: {
//     fontFamily: "Arial",
//     fontSize: 30,
//     color: "#ffffff",
//     textAlignVertical: "center",
//     textAlign: "center",
//   },
// });
