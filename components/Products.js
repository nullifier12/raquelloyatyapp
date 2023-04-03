import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import Button from "../Layout/Button";

const Products = (props) => {
  const renderItem = ({ item }) => {
    const showId = (id) => {
      console.log((id = item.id));
    };
    return (
      <View style={{ marginVertical: 10 }}>
        <View style={styles.container}>
          <Pressable
            android_ripple={{ color: "gray" }}
            style={({ pressed }) => (pressed ? styles.btnPress : null)}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                height: 150,
              }}
            />
            <View style={styles.itemContainer}>
              <Text style={styles.title}>600 points</Text>
            </View>
            <View style={styles.descriptionName}>
              <Text style={styles.productName}>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <View
              style={{
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginHorizontal: 20,
                marginVertical: 20,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
                marginBottom: 10,
              }}
            >
              <Text>Home Delivery</Text>
              <Button
                container={styles.buttonContainer}
                padding={styles.innerCont}
                onPress={showId}
                nameColor={styles.buttonName}
              >
                Order
              </Button>
            </View>
          </Pressable>
        </View>
      </View>
    );
  };
  return (
    <View style={{ marginBottom: "50%" }}>
      <FlatList
        data={props.product}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Products;

const styles = StyleSheet.create({
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
  itemContainer: {
    borderRadius: 5,
    paddingVertical: 7,
    marginRight: "70%",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "#00235B",
    elevation: 8,
  },
  title: {
    color: "#fff",
  },
  descriptionName: {
    paddingLeft: 15,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 15,
  },
  buttonContainer: {
    borderRadius: 8,
    borderColor: "#000",
    elevation: 4,
    backgroundColor: "#00235B",
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerCont: {
    paddingHorizontal: 25,
    paddingVertical: 7,
  },
  pressed: {
    opacity: Platform.select({ ios: 0.25, android: "" }),
  },
  btnPress: {
    opacity: 0.9,
  },
  buttonName: {
    color: "#fff",
  },
});
