import Colors from "@/constants/Colors";
import { wp } from "@/helpers/common";
import { View, Text, Pressable, StyleSheet } from "react-native";
const CategoryItem = ({ title }: { title: string }) => {
  return (
    <View>
      <Pressable style={styles.catButton}>
        <Text style={styles.catText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  catButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.tabIconDefault,
    borderRadius: 50,
  },
  catText: {
    fontSize: wp(3.5),
    textTransform: "uppercase",
    fontWeight: "500",
  },
});
export default CategoryItem;
