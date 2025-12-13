import {
    Box,
    Flex,
    Image,
    Stack,
    Text,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {
    useNavigate
} from "react-router-dom";
import watches from "../watches";
import arrowBack from "../images/arrow-back.png";
import bgElement from "../images/bg_elemen_2.png";

function Collection() {
    const size = 1.2;
    const navigate = useNavigate();
    return (
        <Stack
            align="center"
            direction="column"
            gapY={5}
        >
            <Box
                w="100%"
            >
                <Box
                    bgImg={`url(${arrowBack})`}
                    bgPos="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    cursor="pointer"
                    h="101px"
                    onClick={() => navigate("/")}
                    w="101px"
                >
                </Box>
            </Box>
            <Wrap
                gap={20}
                justify="center"
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
                                h={`${215.9*size}px`}
                                onClick={() => navigate(`/collection/${watch.id}`)}
                                w={`${358.98*size}px`}
                            >
                                <Image
                                    h="100%"
                                    src={watch.src}
                                    w="auto"
                                />
                                <Stack
                                    direction="column"
                                    gapY={2}
                                >
                                    <Text
                                        fontSize="10px"
                                        mx={2}
                                        textAlign="left"
                                    >
                                        Energy: {watch.spec.energy}
                                    </Text>
                                    <Text
                                        fontSize="10px"
                                        mx={2}
                                        textAlign="left"
                                    >
                                        Movement: {watch.spec.movement}
                                    </Text>
                                    {
                                        watch.spec.battery || watch.spec.powerReserve
                                        ? (
                                            <Text
                                                fontSize="10px"
                                                mx={2}
                                                textAlign="left"
                                            >
                                                {
                                                    watch.spec.battery
                                                    ? "Battery"
                                                    : "Power Reserve"
                                                }: {watch.spec.movement}
                                            </Text>
                                        )
                                        : ""
                                    }
                                    <Text
                                        fontSize="10px"
                                        mx={2}
                                        textAlign="left"
                                    >
                                        Dial: {watch.spec.dial}
                                    </Text>
                                    <Text
                                        fontSize="10px"
                                        mx={2}
                                        textAlign="left"
                                    >
                                        Caliber: {watch.spec.caliber}
                                    </Text>
                                    <Text
                                        fontSize="10px"
                                        mx={2}
                                        textAlign="left"
                                    >
                                        Diameter: {watch.spec.diameter}
                                    </Text>
                                    {
                                        watch.spec.cosc
                                        ? (
                                            <Text
                                                fontSize="10px"
                                                mx={2}
                                                textAlign="left"
                                            >
                                                COSC: Yes
                                            </Text>
                                        )
                                        : ""
                                    }
                                </Stack>
                            </Flex>
                        </WrapItem>
                    )
                }
            </Wrap>
        </Stack>
    );
}

export default Collection;