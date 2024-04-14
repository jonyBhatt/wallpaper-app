import { memo } from "react";
import Colors from "@/constants/Colors";
import { wp } from "@/helpers/common";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { CategoryProps } from "./category";
import Animated, { FadeInRight } from "react-native-reanimated";
const CategoryItem = ({ title, activeCat, handleActiveCat, index }: CategoryProps) => {
  return (
    <Animated.View entering={FadeInRight.delay(index as number*200).duration(1000).springify()}>
      <Pressable
        style={[
          styles.catButton,
          {
            backgroundColor:
              activeCat === title
                ? Colors.light.tint
                : Colors.light.tabIconDefault,
          },
        ]}
        onPress={() => {
          const newActiveCat = activeCat === title ? null : title;
          const stringValue =
            newActiveCat !== null && newActiveCat !== undefined
              ? newActiveCat
              : "";
          handleActiveCat(stringValue);
        }}
      >
        <Text
          style={[
            styles.catText,
            {
              color: activeCat === title ? Colors.dark.text : Colors.light.text,
            },
          ]}
        >
          {title}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  catButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderCurve: "continuous",
  },
  catText: {
    fontSize: wp(2.8),
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
export default memo(CategoryItem);
