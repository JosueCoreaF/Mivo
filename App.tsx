import React from "react";
import { View, StyleSheet } from "react-native";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import { LanguageProvider } from "./src/contexts/LanguageContext";
import Login from "./src/screens/Login";
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingReason,
  ViroTrackingStateConstants,
} from "@reactvision/react-viro";

const HelloWorldSceneAR = () => {
  const [text, setText] = React.useState("Initializing AR...");
  function onInitialized(state: any, reason: ViroTrackingReason) {
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("¡Hola!");
    }
  }
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
    </ViroARScene>
  );
};

function Main() {
  const { user } = useAuth();
  // Si hay usuario autenticado, mostrar AR, si no, Login
  return user ? (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{ scene: HelloWorldSceneAR }}
      style={styles.f1}
    />
  ) : (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});