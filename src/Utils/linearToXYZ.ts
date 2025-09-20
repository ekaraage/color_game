import { type ColorLinear, type ColorXYZ } from "@/Types";

const linearToXYZ = (colorLinear: ColorLinear) => {
  const colorXYZ: ColorXYZ = {
    X:
      0.4124 * colorLinear.red +
      0.3576 * colorLinear.green +
      0.1805 * colorLinear.blue,
    Y:
      0.2126 * colorLinear.red +
      0.7152 * colorLinear.green +
      0.0722 * colorLinear.blue,
    Z:
      0.0193 * colorLinear.red +
      0.1192 * colorLinear.green +
      0.9505 * colorLinear.blue,
  };
  return colorXYZ;
};

export default linearToXYZ;
