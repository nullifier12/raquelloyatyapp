import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import home from "../assets/logo2.jpg";

const Logo = ({ route, navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={home} style={{ width: 200, height: 200 }} />
    </View>
  );
};
export default Logo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
