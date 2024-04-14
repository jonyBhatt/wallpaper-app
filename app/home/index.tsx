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
import { useRef, useState } from "react";
import Category from "@/components/category";
const Homepage = () => {
  const [search, setSearch] = useState<string | undefined>("");
  const [activeCategory, setActiveCategory] = useState<
    string | null | undefined
  >("");

  const searchInputRef = useRef(null);
  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleActiveCat = (cat: string) => {
    setActiveCategory(cat);
  };

  // console.log("activate cat: ", activeCategory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleIcon}>
        <Text style={styles.title}>Wallify</Text>
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
              ref={searchInputRef}
            />
          </View>
          {search && (
            <Pressable onPress={() => setSearch("")}>
              <AntDesign name="closecircleo" size={20} color="lightgray" />
            </Pressable>
          )}
        </View>
        {/** Category */}
        <View style={styles.categoryContainer}>
          <Category
            activeCat={activeCategory}
            handleActiveCat={handleActiveCat}
          />
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
  categoryContainer: {
    marginHorizontal: wp(4),
  },
});

export default Homepage;
