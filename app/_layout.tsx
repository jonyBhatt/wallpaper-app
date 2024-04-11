import { Stack } from "expo-router";
import { View, Text } from "react-native";
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="home/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default Layout;
