import { View, Text, StyleSheet, FlatList } from "react-native";
import { categories } from "@/constants/data";
import CategoryItem from "./category-item";
import { wp } from "@/helpers/common";
const Category = () => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryItem title={item} />}
        horizontal
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.showCat}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  showCat: {
    paddingHorizontal:wp(2),
    gap:15
  },
});

export default Category;
