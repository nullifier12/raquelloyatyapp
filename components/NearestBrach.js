import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScrollView } from "react-native";
const NearestBranch = ({ branch }) => {
  const nav = useNavigation();
  // const renderItem = ({ item }) => {
  //   let d = item;
  //   const navigateTolocation = () => {
  //     nav.navigate("Station", { id: d.key });
  //   };
  //   return;
  //   // <View style={styles.container}>
  //   //   <Pressable
  //   //     onPress={navigateTolocation}
  //   //     android_ripple={{ color: "gray" }}
  //   //     style={styles.shop}
  //   //   >
  //   //     <View>
  //   //       <Text>
  //   //         Station: <Text>{d.title}</Text>
  //   //       </Text>
  //   //       <Text>
  //   //         Distance: <Text>{d.distanceInKM.toFixed(2)} Km</Text>
  //   //       </Text>
  //   //     </View>
  //   //     <View style={styles.shopCart}>
  //   //       <Text>
  //   //         <Text>
  //   //           Route{"  "}
  //   //           <FontAwesome5 name="location-arrow" size={20} color="#CD0404" />
  //   //         </Text>
  //   //       </Text>
  //   //     </View>
  //   //   </Pressable>
  //   // </View>
  // };
  return (
    <View>
      {/* <View>
        <FlatList
          data={branch}
          keyExtractor={(item) => {
            return item.key;
          }}
          renderItem={renderItem}
          nestedScrollEnabled={true}
        />
      </View> */}
      {branch.map((d) => {
        const navigateTolocation = () => {
          nav.navigate("Station", { id: d.key });
        };
        return (
          <View style={styles.container} key={d.key}>
            <Pressable
              onPress={navigateTolocation}
              android_ripple={{ color: "gray" }}
              style={styles.shop}
            >
              <View>
                <Text>
                  Station: <Text>{d.title}</Text>
                </Text>
                <Text>
                  Distance: <Text>{d.distanceInKM.toFixed(2)} Km</Text>
                </Text>
              </View>
              <View style={styles.shopCart}>
                <Text>
                  <Text>
                    Route{"  "}
                    <FontAwesome5
                      name="location-arrow"
                      size={20}
                      color="#CD0404"
                    />
                  </Text>
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default NearestBranch;
const styles = StyleSheet.create({
  shopCart: {
    marginRight: 20,
    alignSelf: "center",
  },
  shop: {
    // backgroundColor: "#fff",
    // elevation: 4,
    // shadowColor: "black",
    // shadowOpacity: 0.25,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // padding: 20,
    // marginVertical: 5,
    // marginHorizontal: 16,
    // borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    padding: 20,
  },
  container: {
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
});
