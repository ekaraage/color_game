import {
  NumberInput,
  type NumberInputValueChangeDetails,
} from "@chakra-ui/react";
type ColorSelectProps = {
  colorName: string;
  colorValue: number;
  onChange: (detail: NumberInputValueChangeDetails) => void;
};

const SingleColorSelect = (props: ColorSelectProps) => {
  return (
    <>
      {props.colorName}
      <NumberInput.Root
        allowMouseWheel
        min={0}
        max={255}
        onValueChange={props.onChange}
        value={String(props.colorValue)}
        width="100px"
      >
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
    </>
  );
};

export default SingleColorSelect;
