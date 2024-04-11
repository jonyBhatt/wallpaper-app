import { hp, wp } from "@/helpers/common";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { useState } from "react";
const Homepage = () => {
  const [search, setSearch] = useState<string | undefined>("");
  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleIcon}>
        <Text style={styles.title}>Splash</Text>
        <Pressable>
          <FontAwesome6 name="bars-staggered" size={24} color="#D13670" />
        </Pressable>
      </View>
      <ScrollView contentContainerStyle={{ gap: 15 }}>
        <View style={styles.searchbar}>
          <View style={styles.searchBarContainer}>
            <FontAwesome6 name="searchengin" size={24} color="darkgray" />
            <TextInput
              placeholder="Search..."
              style={styles.input}
              value={search}
              onChangeText={(value) => setSearch(value)}
            />
          </View>
          {search && (
            <Pressable onPress={() => setSearch("")}>
              <AntDesign name="closecircleo" size={20} color="lightgray" />
            </Pressable>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

    flexDirection: "column",
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: hp(3),
    fontFamily: "Nunito_700Bold",
  },
  titleIcon: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: wp(4),
  },
  searchbar: {
    marginHorizontal: wp(4),
    marginTop: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    fontSize: hp(2),
  },
});

export default Homepage;
