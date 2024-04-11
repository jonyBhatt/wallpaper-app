import { Dimensions } from "react-native";

const { width: DeviceWidth, height: DeviceHeight } = Dimensions.get("window");

export const wp = (percentage: number) => {
  const width = DeviceWidth;
  return (percentage * width) / 100;
};
export const hp = (percentage: number) => {
  const height = DeviceHeight;
  return (percentage * height) / 100;
};
