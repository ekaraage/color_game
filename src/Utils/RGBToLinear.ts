import { type ColorRGB } from "@/Types";

const RGBToLinear = (colorRGB: ColorRGB) => {
  let { red: linearRed, green: linearGreen, blue: linearBlue } = colorRGB;

  linearRed /= 255.0;
  if (linearRed < 0.04045) {
    linearRed /= 12.92;
  } else {
    linearRed = Math.pow((linearRed + 0.055) / 1.055, 2.4);
  }

  linearBlue /= 255.0;
  if (linearBlue < 0.04045) {
    linearBlue /= 12.92;
  } else {
    linearBlue = Math.pow((linearBlue + 0.055) / 1.055, 2.4);
  }

  linearGreen /= 255.0;
  if (linearGreen < 0.04045) {
    linearGreen /= 12.92;
  } else {
    linearGreen = Math.pow((linearGreen + 0.055) / 1.055, 2.4);
  }

  const colorLinear = { red: linearRed, blue: linearBlue, green: linearGreen };

  return colorLinear;
};

export default RGBToLinear;
