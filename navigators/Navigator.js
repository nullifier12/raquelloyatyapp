import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";
import Logo from "../screens/Logo";
import Home from "../screens/Home";
import Station from "../screens/Station";
import Rewards from "../screens/Rewards";
import MyCard from "../screens/MyCard";
import More from "../screens/More";
import Login from "../screens/Login";
import ViewandEdit from "../components/ViewandEdit";
import Transaction from "../components/Transaction";
import ToPoints from "../components/ToPoints";
import ForgotPassword from "../components/ForgotPassword";
import CreateAccount from "../components/CreateAccount";
import Shop from "../components/Shop";
import logo from "../assets/logo.png";
const Stack = createNativeStackNavigator();
const ButtomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <ButtomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ButtomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-home-outline" size={size} color={color} />
            );
          },
        }}
      />
      <ButtomTab.Screen
        name="Station"
        component={Station}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="map" size={size} color={color} />;
          },
        }}
      />
      <ButtomTab.Screen
        name="MyCard"
        component={MyCard}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <View
                  style={{
                    elevation: 8,
                    backgroundColor: "white",
                    borderRadius: 100,
                    marginBottom: 20,
                    borderColor: "",
                  }}
                >
                  <Image
                    source={logo}
                    style={{
                      width: 50,
                      height: 50,
                    }}
                  />
                </View>
              </>
            );
          },
        }}
      />
      <ButtomTab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="gift-outline" size={24} color={color} />;
          },
        }}
      />
      <ButtomTab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="menu" size={size} color={color} />;
          },
        }}
      />
    </ButtomTab.Navigator>
  );
};
const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
          // headerStyle: {
          //   backgroundColor: "#616F39",
          // },
        }}
      >
        <Stack.Screen name="logo" component={Logo} />
        <Stack.Screen name="MainNav" component={Tabs} />
        <Stack.Screen
          name="Profile"
          component={ViewandEdit}
          options={{
            headerShown: true,
            title: "",
          }}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{
            headerShown: true,
            title: "",
          }}
        />
        <Stack.Screen
          name="CheckPoints"
          component={ToPoints}
          options={{ title: "", headerShown: true }}
        />
        <Stack.Screen
          name="ToShop"
          component={Shop}
          options={{
            title: "",
            headerShown: true,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPass" component={ForgotPassword} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
