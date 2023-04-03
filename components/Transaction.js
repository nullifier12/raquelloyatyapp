import { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

const Transaction = () => {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  });
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <Text style={[styles.outerContainer, styles.title]}>
        Transaction history
      </Text>

      <View style={styles.outerContainer}>
        {/* <View style={styles.innerContainer}>
          <View>
            <Text style={styles.nameColor}>Transaction Name</Text>
          </View>
          <View>
            <Text style={styles.nameColor}>Points</Text>
          </View>
        </View> */}

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        >
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.transactionTittle}>32nd Street BGC</Text>
              <Text style={styles.transactionDate}>March 10, 2023</Text>
            </View>
            <View>
              <Text style={styles.transactionPoint}>₱ 2000</Text>
              <Text>+19 points</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.transactionTittle}>32nd Street BGC</Text>
              <Text style={styles.transactionDate}>March 10, 2023</Text>
            </View>
            <View>
              <Text style={styles.transactionPoint}>₱ 2000</Text>
              <Text>+19 points</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.transactionTittle}>32nd Street BGC</Text>
              <Text style={styles.transactionDate}>March 10, 2023</Text>
            </View>
            <View>
              <Text style={styles.transactionPoint}>₱ 2000</Text>
              <Text>+19 points</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.transactionTittle}>32nd Street BGC</Text>
              <Text style={styles.transactionDate}>March 10, 2023</Text>
            </View>
            <View>
              <Text style={styles.transactionPoint}>₱ 2000</Text>
              <Text>+19 points</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default Transaction;
const styles = StyleSheet.create({
  outerContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    borderWidth: 0.5,
    borderColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#616F39",
  },
  nameColor: {
    color: "white",
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    marginVertical: 5,
  },
  transactionTittle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  transactionDate: {
    fontWeight: "400",
    fontSize: 10,
  },
  transactionPoint: {
    fontWeight: "400",
    fontSize: 14,
    color: "#03C988",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    // color: "#616F39",
    color: "#CD0404",
    marginBottom: 30,
  },
});
