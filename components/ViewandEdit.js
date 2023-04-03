import { Text, View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
const ViewandEdit = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.outerContainer, styles.title]}>
        View and edit profile
      </Text>
      <View style={styles.itemContainer}>
        <View style={styles.press}>
          <Pressable
            android_ripple={{ color: "gray" }}
            style={styles.innerPress}
          >
            <View style={styles.item}>
              <View style={styles.desc}>
                <Feather name="edit-3" size={24} color="#616F39" />
                <Text style={styles.actionName}>Edit Details</Text>
              </View>
              <Text style={styles.arrow}> {">"} </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.press}>
          <Pressable
            android_ripple={{ color: "gray" }}
            style={styles.innerPress}
          >
            <View style={styles.item}>
              <View style={styles.desc}>
                <Feather name="lock" size={24} color="#616F39" />
                <Text style={styles.actionName}> Security</Text>
              </View>
              <Text style={styles.arrow}> {">"} </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.press}>
          <Pressable
            android_ripple={{ color: "gray" }}
            style={styles.innerPress}
          >
            <View style={styles.item}>
              <View style={styles.desc}>
                <Feather name="credit-card" size={24} color="#616F39" />
                <Text style={styles.actionName}>Loyalty Card</Text>
              </View>
              <Text style={styles.arrow}> {">"} </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.press}>
          <Pressable
            android_ripple={{ color: "gray" }}
            style={styles.innerPress}
          >
            <View style={styles.item}>
              <View style={styles.desc}>
                <Feather name="trash" size={24} color="#616F39" />
                <Text style={styles.actionName}>Delete Account</Text>
              </View>
              <Text style={styles.arrow}> {">"} </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default ViewandEdit;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  outerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // color: "#616F39",
    marginBottom: 30,
    color: "#CD0404",
  },
  itemContainer: {
    marginHorizontal: 23,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  press: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  innerPress: {
    paddingVertical: 20,
  },
  desc: {
    flexDirection: "row",
  },
  actionName: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  arrow: {
    fontSize: 15,
    fontWeight: "500",
  },
});
