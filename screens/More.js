import { Text, View, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const More = () => {
  const nav = useNavigation();
  const goToview = () => {
    nav.navigate("Profile");
  };
  const goToTransaction = () => {
    nav.navigate("Transaction");
  };
  // console.log(nav);
  return (
    <View style={style.outerContainer}>
      <Text style={style.name}>Roland</Text>
      <View style={style.innerContainer}>
        <View style={style.items}>
          <Pressable
            style={style.press}
            android_ripple={{ color: "gray" }}
            onPress={goToview}
          >
            <AntDesign name="user" size={24} color="black" />
            <Text style={style.itemName}>View and edit profile</Text>
          </Pressable>
        </View>
        <View style={style.items}>
          <Pressable
            style={style.press}
            android_ripple={{ color: "gray" }}
            onPress={goToTransaction}
          >
            <AntDesign name="profile" size={24} color="black" />
            <Text style={style.itemName}>Transactions</Text>
          </Pressable>
        </View>
        {/* <View style={style.items}>
          <Pressable style={style.press} android_ripple={{ color: "gray" }}>
            <MaterialCommunityIcons name="routes" size={24} color="black" />
            <Text style={style.itemName}>App Tours</Text>
          </Pressable>
        </View> */}
        <View style={style.items}>
          <Pressable style={style.press} android_ripple={{ color: "gray" }}>
            <FontAwesome5 name="hands-helping" size={24} color="black" />
            <Text style={style.itemName}>Help</Text>
          </Pressable>
        </View>
        <View style={style.items}>
          <Pressable style={style.press} android_ripple={{ color: "gray" }}>
            <FontAwesome name="gears" size={24} color="black" />
            <Text style={style.itemName}>Settings</Text>
          </Pressable>
        </View>
        <View style={style.items}>
          <Pressable style={style.press} android_ripple={{ color: "gray" }}>
            <Text>LEGAL</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default More;

const style = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  innerContainer: {
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  items: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  press: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  name: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#CD0404",
  },
  itemName: {
    marginLeft: 20,
  },
  itemLegal: {
    marginBottom: 10,
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
