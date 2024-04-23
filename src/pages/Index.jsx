import { Box, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { FaRobot, FaLightbulb } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5} maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto" mt="50px">
      <VStack spacing={4} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbmNlcHR8ZW58MHx8fHwxNzEzODg1NjMwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Concept" />
        <Heading as="h1" size="xl">
          AI Prompt Generator
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Generate creative prompts for your AI projects instantly!
        </Text>
        <Button leftIcon={<FaRobot />} colorScheme="teal" variant="solid">
          Generate Prompt
        </Button>
        <Button leftIcon={<FaLightbulb />} colorScheme="orange" variant="outline">
          Get Ideas
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
