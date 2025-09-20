import type { ColorRGB } from "@/Types";
import SingleColorSelect from "../Components/SingleColorSelect";
import { HStack } from "@chakra-ui/react";

type ColorSelectorProps = {
  colorInput: ColorRGB;
  onChange: (colorRGB: ColorRGB) => void;
};

export type ColorRGBName = keyof ColorRGB;

const ColorSelector = (props: ColorSelectorProps) => {
  const { red, green, blue } = props.colorInput;

  const onChangeSpecificColor = (
    colorName: ColorRGBName,
    colorValue: number
  ) => {
    props.onChange({ ...props.colorInput, [colorName]: colorValue });
  };

  return (
    <HStack>
      <SingleColorSelect
        colorName="Red"
        colorValue={red}
        onChange={(e) => onChangeSpecificColor("red", e.valueAsNumber)}
      />
      <SingleColorSelect
        colorName="Green"
        colorValue={green}
        onChange={(e) => onChangeSpecificColor("green", e.valueAsNumber)}
      />
      <SingleColorSelect
        colorName="Blue"
        colorValue={blue}
        onChange={(e) => onChangeSpecificColor("blue", e.valueAsNumber)}
      />
    </HStack>
  );
};

export default ColorSelector;
