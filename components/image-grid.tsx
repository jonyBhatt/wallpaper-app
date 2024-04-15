import { View, Text, StyleSheet } from "react-native";
import { MasonryFlashList, MasonryListItem } from "@shopify/flash-list";
import ImageCard from "./image-card";
import { getColumnRows, wp } from "@/helpers/common";
const ImageGrid = ({ images }: any) => {
  const col = getColumnRows();
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={col}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (
          //@ts-ignore
          <ImageCard item={item} index={index} column={col} />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  contentContainer: {
    paddingHorizontal: wp(4),
  },
});
export default ImageGrid;
