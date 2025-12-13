import {
    Box,
    Button,
    Flex,
    Heading,
    Image,
    Text,
    Stack,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {
    useNavigate
} from "react-router-dom";
import watches from "../watches";
import watchImage from "../images/bg_landing.png";
import logo from "../images/tissot_logo_1.png";
import bgElement from "../images/bg_elemen.png";

function Landing() {
    const size = 1.5;
    const navigate = useNavigate();
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
                            onClick={() => navigate("/collection")}
                            variant="plain"
                        >
                            Collection
                        </Button>
                        <Button
                            fontSize="24px"
                            fontWeight={600}
                            onClick={() => navigate("/history")}
                            variant="plain"
                        >
                            History
                        </Button>
                        <Button
                            fontSize="24px"
                            fontWeight={600}
                            onClick={() => navigate("/know-how")}
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
                    gap={5}
                    w="90%"
                >
                    {
                        watches.map((watch, index) => 
                            <WrapItem
                                key={index}
                            >
                                <Flex
                                    align="center"
                                    cursor="pointer"
                                    justify="center"
                                    bgImg={`url(${bgElement})`}
                                    bgPos="center"
                                    bgRepeat="no-repeat"
                                    bgSize="cover"
                                    h={`${98*size}px`}
                                    onClick={() => navigate(`/collection/${watch.id}`)}
                                    w={`${163*size}px`}
                                >
                                    <Image
                                        h="100%"
                                        src={watch.src}
                                        w="auto"
                                    />
                                    <Text
                                        fontSize="16px"
                                        mx={2}
                                        textAlign="center"
                                    >
                                        {watch.label}
                                    </Text>
                                </Flex>
                            </WrapItem>
                        )
                    }
                </Wrap>
            </Stack>
        </Flex>
    );
}

export default Landing;