import { SafeAreaView, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Wrapper = (props) => {
  return (
    <LinearGradient
      colors={["#609966", "#C21010", "#FFB03B"]}
      style={style.container}
    >
      <SafeAreaView>{props.children}</SafeAreaView>
    </LinearGradient>
  );
};
export default Wrapper;
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
