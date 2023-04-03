import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

// import * as Brightness from "expo-brightness";
import { useCallback, useState, useEffect } from "react";
import * as Brightness from "expo-brightness";
import QRCode from "react-native-qrcode-svg";
import { AntDesign } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import functions from "../Layout/functions";
import logo from "../assets/logo.png";
const MyCard = () => {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  });

  // const adjustBrightness = async () => {
  //   const { status } = await Brightness.requestPermissionsAsync();
  //   if (status === "granted") {
  //     functions.brightness(1);
  //   }
  // };

  // const showBrigthness = async () => {
  //   ScreenBrightness.setBrightness(0.5);
  // };
  // useEffect(() => {
  //   functions.brightness(1);
  // }, []);
  useFocusEffect(
    useCallback(() => {
      const setBrightness = async () => {
        Brightness.setBrightnessAsync(1);
      };
      setBrightness();
      return async () => {
        Brightness.restoreSystemBrightnessAsync();
      };
    }, [])
  );
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}
      style={{ backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Your Appp + Card</Text>
          <Text
            style={{
              paddingBottom: 15,
              opacity: 0.5,
              fontWeight: "400",
            }}
          >
            Show this to the cashier each time you shop to unlock and redeem
            rewards
          </Text>
        </View>
        <View style={styles.qrContainer}>
          <View style={styles.qrCode}>
            <QRCode
              value={JSON.stringify({
                name: "Roland",
                expiryDate: "2023-12-31",
                manufacturer: "011219999",
              })}
              size={170}
              color="black"
              // logo={logo}
              // logoSize={30}
              logoBackgroundColor={"#fff"}
              backgroundColor="white"
            />
          </View>
          <View style={styles.customerNumber}>
            <Text>011219993232323</Text>
          </View>
        </View>
      </View>
      <View style={[styles.container, { alignItems: "flex-start" }]}>
        <Text
          style={{
            paddingTop: 20,
            paddingLeft: 16,
            opacity: 0.5,
            fontWeight: "bold",
          }}
        >
          Your rewards
        </Text>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#CD0404"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.container,
          { alignItems: "flex-start", paddingBottom: 15 },
        ]}
      >
        <Text
          style={{
            paddingLeft: 16,
            opacity: 0.5,
            fontWeight: "bold",
          }}
        >
          Member benefits
        </Text>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#CD0404"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#CD0404"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#CD0404"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#616F39"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#616F39"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
        <View style={styles.rewardsContainer}>
          <AntDesign
            name="gift"
            size={24}
            color="#616F39"
            style={{ alignSelf: "center" }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text>Your rewards are on their way </Text>
            <Text>keep using this app + to unlock new offers and</Text>
            <Text>reward</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default MyCard;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  qrContainer: {
    // borderWidth:,
    borderRadius: 8,
    elevation: 4,
    paddingHorizontal: 100,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#616F39",
  },
  qrCode: {
    borderRadius: 8,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },
  title: {
    paddingTop: 50,
    paddingBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#CD0404",
    // color: "#616F39",
  },
  customerNumber: {
    borderRadius: 3,
    backgroundColor: "#fff",
    paddingVertical: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  rewardsContainer: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    paddingHorizontal: 23,
    paddingVertical: 20,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
    flexDirection: "row",
  },
});
