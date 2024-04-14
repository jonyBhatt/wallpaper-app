import { View, Text, StyleSheet, FlatList } from "react-native";
import { categories } from "@/constants/data";
import CategoryItem from "./category-item";
import { wp } from "@/helpers/common";
export interface CategoryProps {
  activeCat: string | null | undefined;
  handleActiveCat: (val: string) => void;
  title?: string;
  index?:number
}
const Category = ({ activeCat, handleActiveCat }: CategoryProps) => {
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem
            title={item}
            activeCat={activeCat}
            handleActiveCat={handleActiveCat}
            index={index}
          />
        )}
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
    paddingHorizontal: wp(2),
    gap: 15,
  },
});

export default Category;
