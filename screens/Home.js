import React, { useState, useEffect, useCallback } from "react";
import Svg from "react-native-svg";
import * as Location from "expo-location";
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  BackHandler,
  Alert,
  ScrollView,
  RefreshControl,
  Pressable,
  Linking,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import * as IntentLauncher from "expo-intent-launcher";
import Geofence from "react-native-expo-geofence";
import { Feather } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import NearestBranch from "../components/NearestBrach";
import functions from "../Layout/functions";

const Home = ({ route, navigation }) => {
  let distance = 2;
  const [currentLocation, setCurLoc] = useState({});
  const [fetchingStation, setStationFetch] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [nearestRoute, setRoute] = useState([]);

  const getRoutes = useCallback(async () => {
    await axios
      .get("http://192.168.68.102:5000/getBranch")
      .then(async (res) => {
        let nearestStation = await res.data.map((d) => {
          return {
            key: d.id,
            latitude: d.latitude,
            longitude: d.longitude,
            title: d.branc_name,
            description: d.address,
          };
        });
        setRoute(nearestStation);
        setTimeout(() => {
          setStationFetch(false);
        }, 2000);
      });
  }, []);

  useEffect(() => {
    getRoutes();
  }, [getRoutes]);

  const goToSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app_settings:");
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ActivityAction.LOCATION_SOURCE_SETTINGS
      );
    }
  };
  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      getRoutes();
      setRefresh(false);
    }, 2000);
  }, []);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("no problem here");
        return;
      } else {
        try {
          let location = await Location.getCurrentPositionAsync({});
          setCurLoc({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        } catch (err) {
          Alert.alert(
            "Location not found",
            "Please make sure your location service provider is ON and Please make sure that your device is supported by Google",
            [
              {
                text: "Okay",
                onPress: () => null,
                style: "cancel",
              },
              {
                text: "Go to Settings",
                onPress: goToSettings,
                style: "default",
              },
            ]
          );
        }
      }
    })();

    // functions.restoreBrightness();
  }, []);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Are you sure you want to exit the app?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          {
            text: "YES",
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ]);
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", backAction);
      return function () {
        BackHandler.removeEventListener("hardwareBackPress", backAction);
      };
    }, [])
  );
  const goCollect = () => {
    functions.goToRoutes(navigation, "CheckPoints", null);
  };
  const goToShop = () => {
    functions.goToRoutes(navigation, "ToShop", null);
  };
  let nearest = Geofence.filterByProximity(
    currentLocation,
    nearestRoute,
    distance
  );

  return (
    <LinearGradient colors={["#FFF", "#FFF", "#FFF"]} style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refresh} />
        }
      >
        <SafeAreaView>
          <View style={styles.container}>
            <Text style={styles.name}>Hi Roland</Text>
            <Text style={styles.greetings}>Nice to see you again</Text>
            <View style={styles.ouTContainer}>
              <View>
                <View>
                  <Pressable
                    android_ripple={{ color: "gray" }}
                    style={{ padding: 20 }}
                    onPress={goCollect}
                  >
                    <Text style={styles.points}>0 Points</Text>
                    <Text style={styles.collectpoint}>
                      How can I collect Points
                    </Text>
                  </Pressable>
                </View>
                <View style={styles.line} />
                <View>
                  <Pressable
                    android_ripple={{ color: "gray" }}
                    style={{ padding: 20 }}
                  >
                    <Text style={styles.points}>10 stamps to go</Text>

                    <Text>Learn how to get the most out of your stamps</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.shop}>
              <Pressable
                android_ripple={{ color: "gray" }}
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                }}
                onPress={goToShop}
              >
                <View style={styles.shopCart}>
                  <Feather name="shopping-bag" size={24} color="#CD0404" />
                </View>
                <Text>
                  <Text>Shop</Text>
                </Text>
              </Pressable>
            </View>
            <Text style={{ marginHorizontal: "5%" }}> Nearest location</Text>
            {fetchingStation ? (
              <View style={{ marginHorizontal: "5%", marginVertical: "5%" }}>
                <Svg>
                  <Progress.Circle
                    size={30}
                    indeterminate={true}
                    color="#CD0404"
                  />
                </Svg>
              </View>
            ) : nearest.length > 0 ? (
              <View>
                <NearestBranch branch={nearest} />
              </View>
            ) : (
              <Text
                style={{
                  marginHorizontal: "5%",
                  marginVertical: 10,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                No Station Found
              </Text>
            )}
            {/* {closestRoute.length > 0 ? (
            <NearestBranch branch={closestRoute} />
            ) : (
              <View style={{ marginHorizontal: "5%", marginVertical: "5%" }}>
              <Svg>
              <Progress.Circle
              size={30}
              indeterminate={true}
              color="#CD0404"
              />
              </Svg>
              </View>
            )} */}
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    marginVertical: "15%",
    // marginHorizontal: "10%",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CD0404",
    marginHorizontal: "5%",
  },
  greetings: {
    fontSize: 20,
    marginHorizontal: "5%",
  },
  ouTContainer: {
    // marginVertical: 10,
    // borderWidth: 0,
    // borderRadius: 9,
    // marginHorizontal: "5%",
    // borderColor: "black",
    // shadowColor: "#000",
    // elevation: 0.5,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  // innerContainer: {
  //   padding: 20,
  // },
  shop: {
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
  points: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CD0404",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,

    marginHorizontal: 10,
  },
  shopCart: {
    marginRight: 20,
  },
});
