import Colors from "@/constants/Colors";
import { getImageSize, wp } from "@/helpers/common";
import { Image } from "expo-image";
import { View, Text, StyleSheet, Pressable } from "react-native";
interface ImageCardProps {
  item: any;
  index: string;
  col: number;
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const ImageCard = ({ item, index, col }: ImageCardProps) => {
  // console.log(item);
const getImageHeight = ()=>{
  let {imageHeight:height, imageWidth:width} = item;
  return {
    height:getImageSize(height, width)
  }
}

const isLastRow = ()=>{
  return (Number(index)+1) % col === 0
}

  return (
    <Pressable style={[styles.imageWrapper, !isLastRow() && styles.spacing]}>
      <Image
        style={[styles.image, getImageHeight()]}
        source={item.webformatURL}
        transition={1000}
      />
      {/* <Image source={{ uri: item?.webformatURL }} /> */}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  imageWrapper:{
    backgroundColor:Colors.light.background,
    borderRadius:20,
    overflow:"hidden",
    marginBottom:wp(2)
  },
  spacing:{
    marginRight:wp(2)
  }
});
export default ImageCard;
