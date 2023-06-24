import { Box, Center, Container, Select } from "@chakra-ui/react";
import React from "react";
import MovieList from "../../components/MovieList";

function index() {
    return (
        <Container maxW="container.lg">
            <Center bg={"var(--primary)"} w={"100%"}>
                <Select placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Select placeholder="Select option">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Center>
            <Box>
                <MovieList />
            </Box>
        </Container>
    );
}

export default index;