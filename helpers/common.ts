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

export const getColumnRows = () => {
  if (DeviceWidth >= 1024) {
    return 4;
  } else if (DeviceWidth >= 768) {
    return 3;
  } else {
    return 2;
  }
};

export const getImageSize = (height:number, width:number) => {
  if (width > height) {
    return 250;
  } else if (width < height) {
    return 300;
  } else {
    return 200;
  }
};
