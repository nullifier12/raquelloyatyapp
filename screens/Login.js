import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  BackHandler,
  Alert,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Button from "../Layout/Button";
import logo from "../assets/cardlogo.png";
import functions from "../Layout/functions";

const Login = ({ route, navigation }) => {
  const [isPasswordShow, setSeePassword] = useState(true);
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
  const onLogin = () => {
    functions.goToRoutes(navigation, "MainNav", null);
  };

  const goToForgetPass = () => {
    functions.goToRoutes(navigation, "ForgotPass", null);
  };
  const goToCreateAccount = () => {
    functions.goToRoutes(navigation, "CreateAccount", null);
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={logo}
            style={{
              height: 150,
              width: 150,
              alignSelf: "center",
              marginBottom: 50,
            }}
          />
        </View>
        <View style={styles.innerContainer}>
          <TextInput
            theme={{ colors: { primary: "black" } }}
            label="Username"
            selectionColor="#000"
            style={styles.inputs}
            left={
              <TextInput.Icon
                icon={() => {
                  return <FontAwesome5 name="user" size={20} color="black" />;
                }}
              />
            }
          />
          <TextInput
            theme={{ colors: { primary: "black" } }}
            label="Password"
            secureTextEntry={isPasswordShow}
            style={styles.inputs}
            left={
              <TextInput.Icon
                icon={() => {
                  return <Feather name="lock" size={20} color="black" />;
                }}
              />
            }
            right={
              <TextInput.Icon
                icon={() => {
                  if (isPasswordShow === true) {
                    return (
                      <FontAwesome5 name="eye-slash" size={20} color="black" />
                    );
                  } else {
                    return <FontAwesome5 name="eye" size={20} color="black" />;
                  }
                }}
                onPress={() => {
                  setSeePassword((prevState) => {
                    return (prevState = !prevState);
                  });
                }}
              />
            }
          />
          <Button
            container={styles.buttonContainer}
            padding={styles.innerCont}
            nameColor={styles.btnName}
            onPress={onLogin}
          >
            Login
          </Button>
          <View style={styles.actions}>
            <Pressable onPress={goToCreateAccount}>
              <Text style={styles.actionsItem}>Create Account</Text>
            </Pressable>
            <Pressable
              onPress={goToForgetPass}
              //   android_ripple={{ color: "gray" }}
            >
              <Text style={styles.actionsItem}>Forgot Password</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#185c02",
    alignContent: "center",
    justifyContent: "center",
  },
  innerContainer: {
    paddingHorizontal: 50,
    paddingTop: 50,
  },
  inputs: {
    backgroundColor: "#fff",
    marginVertical: 5,
    elevation: 2,
    height: 50,
  },
  buttonContainer: {
    borderRadius: 4,
    borderColor: "#000",
    elevation: 4,
    backgroundColor: "#000",
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  innerCont: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  btnName: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    marginVertical: 10,
  },
  actionsItem: {
    textDecorationLine: "underline",
    color: "#fff",
  },
});
