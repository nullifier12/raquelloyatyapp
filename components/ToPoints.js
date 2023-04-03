import { View, Text, StyleSheet, Linking } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Pressable } from "react-native";
const ToPoints = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.title}>
            Collect points every time you purchase from Raquel
          </Text>
          <View style={styles.wrapperContainer}>
            <View style={styles.innerContainer}>
              <AntDesign
                name="barcode"
                size={24}
                color="black"
                style={styles.icons}
              />
              <Text>1. Present your digital card to the cashier</Text>
            </View>
            <View style={styles.innerContainer}>
              <FontAwesome5
                name="cc-mastercard"
                size={24}
                color="black"
                style={styles.icons}
              />
              <Text>2. Make a purchase to earn points</Text>
            </View>
            <View style={styles.innerContainer}>
              <AntDesign
                name="bells"
                size={24}
                color="black"
                style={styles.icons}
              />
              <Text>
                3. Don't forget to use your points before they expire!
              </Text>
            </View>
          </View>
          <View>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.{" "}
            </Text>
          </View>
          <Pressable
            onPress={() =>
              Linking.openURL("https://www.youtube.com/watch?v=xvFZjo5PgG0")
            }
            style={{ marginVertical: 20 }}
          >
            <Text style={{ color: "red", textDecorationLine: "underline" }}>
              Check here
            </Text>
          </Pressable>
        </View>
        <View style={styles.learnMoreCont}>
          <Text style={styles.learnMoreText}>Want to learn more?</Text>
        </View>
        <View style={styles.helpCenterWrapper}>
          <Pressable
            style={styles.helpCenter}
            android_ripple={{ color: "gray" }}
          >
            <FontAwesome5
              name="hands-helping"
              size={24}
              color="black"
              style={{ marginRight: 10 }}
            />

            <Text>Visit our Help Centre</Text>
            {/* <Text>{">"}</Text> */}
          </Pressable>
        </View>
      </View>
    </>
  );
};
export default ToPoints;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  innerContainer: {
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#CD0404",
  },
  wrapperContainer: {
    marginVertical: 30,
  },
  icons: {
    marginRight: 10,
  },
  learnMoreCont: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  learnMoreText: {
    fontWeight: "300",
    fontSize: 12,
  },
  helpCenter: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  helpCenterWrapper: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});
