import Colors from "@/constants/Colors";
import { hp, wp } from "@/helpers/common";
import {
  Nunito_500Medium,
  Nunito_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import Animated, {
  FadeInDown
} from "react-native-reanimated";
export default function Welcome() {
  const router = useRouter()
  let [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
    Nunito_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/welcome.jpg")}
        alt="welcome"
        resizeMode="cover"
        style={styles.welcomeImage}
      />
      <Animated.View
        entering={FadeInDown.duration(600)}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.content}>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}
          >
            Wallify
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.punchline}
          >
            Wallify in every wallpaper
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600)}>
            <Pressable style={styles.startButton} onPress={()=>router.push("/home/")}>
              <Text style={styles.buttonText}>Start Explore</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeImage: {
    width: wp(100),
    height: hp(110),
    position: "absolute",
  },
  content: {
    gap: 14,
    alignItems: "center",
    width: wp(100),
  },
  title: {
    fontSize: hp(8),
    color: Colors.light.text,
    fontFamily: "Nunito_700Bold",
  },
  punchline: {
    fontSize: hp(2),
    letterSpacing: 2,
    fontFamily: "Nunito_500Medium",
    marginBottom: 10,
  },
  startButton: {
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: Colors.light.tint,
    marginBottom: 50,
  },
  buttonText: {
    fontSize: hp(3),
    fontFamily: "Nunito_700Bold",
    letterSpacing: 1,
    color: Colors.dark.text,
  },
});
