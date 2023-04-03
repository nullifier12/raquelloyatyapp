import { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Platform, Button } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

const Station = ({ route, navigation }) => {
  const [data, setData] = useState([]);
  let id = route.params?.id;
  const getBrachStation = useCallback(async () => {
    await axios.get("http://192.168.68.102:5000/getBranch").then((result) => {
      setData(result.data);
    });
  }, []);
  useEffect(() => {
    getBrachStation();
  }, [getBrachStation]);
  // let data = [
  //   {
  //     key: 1,
  //     latitude: 14.562223270853831,
  //     longitude: 121.05401985347271,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 2,
  //     latitude: 13.405,
  //     longitude: 123.3753,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 3,
  //     latitude: 13.406,
  //     longitude: 123.3753,
  //     title: "Station Name",
  //     description: "test",
  //   },

  //   {
  //     key: 4,
  //     latitude: 14.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "BGC",
  //     description: "test",
  //   },
  //   {
  //     key: 5,
  //     latitude: 14.548727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 6,
  //     latitude: 16.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },

  //   {
  //     key: 7,
  //     latitude: 17.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 8,
  //     latitude: 18.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 9,
  //     latitude: 18.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 10,
  //     latitude: 20.558727670622819,
  //     longitude: 121.05966590344904,
  //     title: "Station Name",
  //     description: "test",
  //   },
  //   {
  //     key: 11,
  //     latitude: 8.472731424240136,
  //     longitude: 125.29939044266939,
  //     title: "Station Name",
  //     description: "test",
  //   },
  // ];

  let newData = data.find((d) => {
    return d.id === id;
  });
  const allBranch = () => {
    return data.map((d, i) => {
      return (
        <Marker
          coordinate={{
            latitude: parseFloat(d.latitude),
            longitude: parseFloat(d.longitude),
          }}
          pinColor="red"
          key={d.id}
          title={d.branc_name}
          description={d.address}
        />
      );
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        focusable={true}
        region={{
          latitude: 12.8797,
          longitude: 121.774,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
        showsUserLocation={true}

        // followsUserLocation={bolean}
      >
        {/* {select && (
          <Marker
            // coordinate={{
            //   latitude: datas.latitude,
            //   longitude: datas.longitude,
            // }}
            pinColor="red"
            icon={require("../assets/green.png")}
            title="test"
            description="test"
            key={1}
            // onDragStart={(e) => {
            //   console.log("coordinateS", e.nativeEvent);
            // }}
            // onDragEnd={(e) => {
            //   console.log("coordinateE", e.nativeEvent.coordinate);
            // }}
            // draggable
          />
        )} */}
        {/* <Marker
          coordinate={{
            latitude: 14.549365341887587,
            longitude: 121.05079248547554,
          }}
          pinColor="green"
          // icon={require("../assets/marker.png")}
          title="BGC"
          description="Near High Street"
          // onDragStart={(e) => {
          // //   console.log("coordinateS", e.nativeEvent);
          // // }}
          // onDragEnd={(e) => {
          //   console.log("coordinateE", e.nativeEvent.coordinate);
          // }}
          // draggable
        /> */}
        {newData ? (
          <Marker
            coordinate={{
              latitude: parseFloat(newData.latitude),
              longitude: parseFloat(newData.longitude),
            }}
            focusable={true}
            // pinColor="red"
            key={newData.id}
            title={newData.branc_name}
            description={newData.address}
          />
        ) : (
          allBranch()
        )}
      </MapView>
      <View
        style={{
          position: "absolute",
          top: "87%",
          alignSelf: "flex-end",
          right: "3%",
        }}
      >
        {id && (
          <Button
            title="View all station"
            onPress={() => {
              delete route.params?.id;
              navigation.navigate("Station");
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Station;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "black",
    // marginTop: 40,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
