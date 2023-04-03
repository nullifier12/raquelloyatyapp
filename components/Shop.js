import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import Products from "./Products";
let ProductsList = [
  {
    id: 1,
    title: "wottled bater",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    image:
      "https://media.karousell.com/media/photos/products/2021/8/23/nature_spring_500_ml_1629707638_31c00f46",
  },
  {
    id: 2,
    title: "wottled bater",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    image:
      "https://media.karousell.com/media/photos/products/2021/8/23/nature_spring_500_ml_1629707638_31c00f46",
  },
  {
    id: 3,
    title: "wottled bater",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    image:
      "https://media.karousell.com/media/photos/products/2021/8/23/nature_spring_500_ml_1629707638_31c00f46",
  },
  {
    id: 4,
    title: "wottled bater",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum",
    image:
      "https://media.karousell.com/media/photos/products/2021/8/23/nature_spring_500_ml_1629707638_31c00f46",
  },
];
const Shop = () => {
  const searchProduct = (data) => {
    console.log(data);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Shop </Text>
        <Text style={styles.pointsAvail}>10 points available</Text>
      </View>
      <Searchbar
        onChangeText={searchProduct}
        placeholder="Search Product"
        style={{ marginBottom: 10 }}
      />
      <View>
        <Products product={ProductsList} />
      </View>
    </View>
  );
};
export default Shop;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#CD0404",
    marginVertical: 10,
  },
  pointsAvail: {
    fontSize: 16,
    fontWeight: "300",
    marginBottom: 10,
  },
});
