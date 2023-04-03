import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Navigator from "./navigators/Navigator";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1, marginTop: 35, backgroundColor: "#fff" }}>
        <Navigator />
      </View>
    </>
  );
}
