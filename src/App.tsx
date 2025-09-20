import { useState } from "react";
import type { ColorRGB } from "./Types";
import { LuExternalLink } from "react-icons/lu";
import {
  Button,
  Stack,
  HStack,
  VStack,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";
import Block from "./Components/Block";
import ColorSelector from "./Components/ColorSelector";
import { calcColorXYZDistance, linearToXYZ, RGBToLinear } from "./Utils";

const getScore = (colorRGBPicked: ColorRGB, colorRGBAnswer: ColorRGB) => {
  const p =
    1.0 -
    calcColorXYZDistance(
      linearToXYZ(RGBToLinear(colorRGBPicked)),
      linearToXYZ(RGBToLinear(colorRGBAnswer))
    );
  const score = Math.round(p * 10000) / 100;
  return score;
};

const App = () => {
  const [colorInput, setColorInput] = useState<ColorRGB>({
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  });
  const [colorAnswer, setColorAnswer] = useState<ColorRGB>({
    red: Math.floor(Math.random() * 256),
    green: Math.floor(Math.random() * 256),
    blue: Math.floor(Math.random() * 256),
  });
  const [isTrying, setIsTrying] = useState(true);
  const score = getScore(colorInput, colorAnswer);
  const url = `https://twitter.com/intent/tweet?text=色合わせゲームをプレイ！スコアは${score}点でした！
    色合わせゲームをプレイする→https://ekaraage.github.io/color_game/
    `;

  return (
    <Box>
      <VStack>
        <Stack direction="row" gap="80px">
          <Block colorRGB={colorInput} text="解答" />
          <Block colorRGB={colorAnswer} text="正解" />
        </Stack>

        {isTrying && (
          <>
            <Box height="40px">
              <ColorSelector colorInput={colorInput} onChange={setColorInput} />
            </Box>
            <Button onClick={() => setIsTrying(false)}>答えを表示！</Button>
          </>
        )}

        {!isTrying && (
          <VStack>
            <Box height="40px">
              <Text textStyle="2xl">スコア: {score}</Text>
            </Box>
            <HStack>
              <Button
                onClick={() => {
                  setIsTrying(true);
                  setColorInput({
                    red: Math.floor(Math.random() * 256),
                    green: Math.floor(Math.random() * 256),
                    blue: Math.floor(Math.random() * 256),
                  });
                  setColorAnswer({
                    red: Math.floor(Math.random() * 256),
                    green: Math.floor(Math.random() * 256),
                    blue: Math.floor(Math.random() * 256),
                  });
                }}
              >
                再挑戦する
              </Button>
              <Link href={url} target="_blank" rel="noopener noreferrer">
                ツイートする <LuExternalLink />
              </Link>
            </HStack>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default App;
