import { View, Pressable, Text } from "react-native";

const Button = ({ children, onPress, padding, container, nameColor }) => {
  return (
    <View style={container}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "gray" }}
        style={padding}
      >
        <View>
          <Text style={nameColor}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Button;
