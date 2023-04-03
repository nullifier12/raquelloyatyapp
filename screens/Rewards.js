import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Carousels from "../Layout/Carousels";
const Rewards = () => {
  return (
    <LinearGradient colors={["#FFF", "#FFF", "#FFF"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.rewards}>Rewards</Text>
        <Text style={styles.memBenifits}>Member benefits</Text>
      </View>
      <Carousels />
      <View style={styles.goRewards}>
        <Text style={styles.memBenifits}>Go Rewards</Text>
      </View>
      <View style={styles.learnRewardsContainer}>
        <Pressable style={styles.pressable} android_ripple={{ color: "gray" }}>
          <Text style={styles.descrip}>Learn about your App Rewards</Text>
          <Text style={styles.tapHere}>
            Tap Here to learn how to unlock you rewards
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};
export default Rewards;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    marginHorizontal: "5%",
  },
  memBenifits: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  rewards: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#CD0404",
    // color: "#616F39",
  },
  goRewards: {
    marginTop: 19,
    marginHorizontal: "5%",
  },
  learnRewardsContainer: {
    borderRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  pressable: {
    flexDirection: "column",
    justifyContent: "space-between",

    borderColor: "black",
    padding: 20,
  },
  descrip: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  tapHere: {
    fontWeight: "300",
    fontSize: 12,
  },
});
