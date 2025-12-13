import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Stack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import watchImage from "../images/bg_landing.png";
import logo from "../images/tissot_logo_1.png";
import bgElement from "../images/bg_elemen.png";
import marcMarquezWatch from "../images/marc_marquez_watch.png";
import MotoGP2025 from "../images/MotoGP_2025.png";
// import Trace33mm from "../images/T-Race_33mm.png"
// import Trace41mm from "../images/T-Race_41mm.png"
// import Trace38mm from "../images/T-Race_38mm.png"
// import Trace45mm from "../images/T-Race_45mm.png"
// import Valjoux from "../images/valjoux.png"
// import Powermatic from "../images/powermatic_80.png"
// import Mechanical from "../images/mechanical.png"
// import History1 from "../images/history_1.png"
// import History2 from "../images/history_2.png"
// import History3 from "../images/history_3.png"
// import History4 from "../images/history_4.png"
// import bgElementv2 from "../images/bg_elemenv2.png";

function Landing() {
    const size = 1.5;
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
            <Stack
                direction="column"
                gapX={5}
                gapY={20}
                w="50%"
            >
                <Stack
                    direction="column"
                    mx="26%"
                    spaceY={5}
                >
                    <Heading
                        as="h1"
                        fontWeight="extrabold"
                        fontSize={48}
                    >
                        TISSOT T-RACE
                    </Heading>
                    <Text
                        fontSize={16}
                        textAlign="justify"
                    >
                        Freedom, the open road, and dedication: the T-Race is a watch of choice for every gentleman biker. Tissot found inspiration in the spirit of the sport to produce watches that reflect the dynamic nature of bikes themselves and the emotion of the sport.
                    </Text>
                </Stack>

                <Wrap
                    mx="10%"
                >
                    <WrapItem>
                        <Flex
                            align="end"
                            justify="center"
                            bgImg={`url(${bgElement})`}
                            bgPos="center"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            h={`${98*size}px`}
                            w={`${163*size}px`}
                        >
                            <Flex
                                align="end"
                                bgImg={`url(${marcMarquezWatch})`}
                                bgPos="left"
                                bgRepeat="no-repeat"
                                bgSize="contain"
                            >
                                
                            </Flex>
                            <Text
                                fontSize="16px"
                                mx={2}
                                textAlign="end"
                                w="100%"
                            >
                                Marc Marquez
                            </Text>
                        </Flex>
                    </WrapItem>
                    <WrapItem ml={4}>
                        <Flex
                            align="end"
                            justify="center"
                            bgImg={`url(${bgElement})`}
                            bgPos="center"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            h={`${98*size}px`}
                            w={`${163*size}px`}
                        >
                            <Flex
                                align="end"
                                bgImg={`url(${MotoGP2025})`}
                                bgRepeat="no-repeat"
                                bgSize="contain"
                                h="100%"
                                w="100%"
                            >
                                <Text
                                    fontSize="16px"
                                    mx={2}
                                    textAlign="right"
                                    w="100%"
                                >
                                    &nbsp;
                                </Text>
                            </Flex>
                        </Flex>
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}

export default Landing;