import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  Image,
  Pressable,
} from "react-native";
import Carousel from "react-native-new-snap-carousel/src/carousel/Carousel";
let carouselItems = [
  {
    title: "Item 1",
    text: "This is text area for Item 1",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "Item 2",
    text: "This is text area for Item 2",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "Item 3",
    text: "This is text area for Item 3",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "Item 4",
    text: "This is text area for Item 4",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
  {
    title: "Item 5",
    text: "This is text area for Item 5",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
];

const Carousels = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Pressable android_ripple={{ color: "gray" }}>
          <View style={styles.slide}>
            <Image
              source={{ uri: item.imgUrl }}
              style={{
                height: 200,
              }}
            />
          </View>
          <View
            style={{ paddingHorizontal: 5, paddingTop: 10, paddingBottom: 30 }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.text}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <View
      style={{ flexDirection: "row", justifyContent: "center", marginLeft: 20 }}
    >
      <Carousel
        // layout={"default"}

        data={carouselItems}
        renderItem={renderItem}
        // windowSize={1}
        sliderWidth={280}
        itemWidth={250}
      />
    </View>
  );
};
export default Carousels;
const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  container: {
    borderRadius: 8,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginBottom: 10,
  },
});
