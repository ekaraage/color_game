import { memo } from "react";
import { type ColorRGB } from "../Types";
import { Box, VStack } from "@chakra-ui/react";

export type BlockProps = {
  colorRGB: ColorRGB;
  text: string;
};

const Block = memo((props: BlockProps) => {
  const { red, green, blue } = props.colorRGB;

  return (
    <VStack>
      {props.text}
      <Box
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: 120,
          height: 120,
        }}
      />
    </VStack>
  );
});

export default Block;
