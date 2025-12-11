import {
    Box,
    Button,
    Flex,
    Stack
} from "@chakra-ui/react";
import watchImage from "../images/watch_image.png";
import logo from "../images/tissot_logo_1.png";

function Landing() {
    return (
        <Flex   
            align="center"
            justify="space-between"
        >
            <Stack
                bgImg={`url(${watchImage})`}
                bgPos="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                direction="column"
                h="100vh"
                overflow="hidden"
                pos="relative"
                _before={{
                    bgColor: "#2E1111",
                    content: '""',
                    clipPath: "polygon(100% 0, 50% 0, 100% 40%)",
                    h: "55%",
                    pointerEvents: "none",
                    pos: "absolute",
                    right: 0,
                    top: 0,
                    w: "45%",
                    zIndex: 0
                }}
                w="50%"
            >
                <Flex
                    align="center"
                    spaceX={20}
                >
                    <Box
                        bgImg={`url(${logo})`}
                        bgPos="center"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        h="183px"
                        w="183px"
                    >
                    </Box>
                    <Stack
                        align="center"
                        direction="row"
                        justify="center"
                        spaceX={20}
                    >
                        <Button
                            fontSize="24px"
                            fontWeight={600}
                            variant="plain"
                        >
                            Collection
                        </Button>
                        <Button
                            fontSize="24px"
                            fontWeight={600}
                            variant="plain"
                        >
                            History
                        </Button>
                        <Button
                            fontSize="24px"
                            fontWeight={600}
                            variant="plain"
                        >
                            Know how
                        </Button>
                    </Stack>
                </Flex>
            </Stack>
        </Flex>
    );
}

export default Landing;