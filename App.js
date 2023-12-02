import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Navigation from "./Navigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar style="auto" backgroundColor="#88dae0" />
    </SafeAreaView>
  );
}
