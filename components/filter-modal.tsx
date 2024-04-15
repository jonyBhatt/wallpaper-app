import Colors from "@/constants/Colors";
import {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { MutableRefObject, useCallback, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, { AnimatedStyle, Extrapolate, Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { BlurView } from "expo-blur";
interface ComponentProps {
  modalRef: MutableRefObject<null>;
  // Other props if any
}

const FilterModal = ({ modalRef }: ComponentProps) => {
  const snapPoints = useMemo(() => ["75%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    //@ts-ignore
    modalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <BottomSheetModal
      ref={modalRef}
      index={0}
      enableDismissOnClose={true}
      snapPoints={snapPoints}
      backdropComponent={customBackDrop}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Text style={styles.text}>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const customBackDrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1,0],
      [0, 1],
      Extrapolation.CLAMP
    ),
  }));
  const containerStyle = [StyleSheet.absoluteFill, style, styles.overlay, containerAnimatedStyle];
  return (
    <Animated.View style={containerStyle}>
      <BlurView style={[styles.blurContainer, StyleSheet.absoluteFill]} tint="dark" intensity={100} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: '#000',
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    // color:Colors.dark.text
  },
  blurContainer: {
    flex: 1,
    // padding: 20,
    // margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    // borderRadius: 20,
  },
});

export default FilterModal;
