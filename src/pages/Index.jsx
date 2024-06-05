import { Box, Container, VStack, Text, Heading, Flex, Link, SimpleGrid, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.700" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center">
            <Heading size="md">Event Management</Heading>
            <HStack spacing={8}>
              <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
              <Link href="#events" _hover={{ textDecoration: "none", color: "blue.300" }}>Events</Link>
              <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
              <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg="blue.50" py={20}>
        <Container maxW="container.lg" textAlign="center">
          <Heading size="2xl" mb={4}>Welcome to Event Management</Heading>
          <Text fontSize="lg">Your one-stop platform for managing and attending events seamlessly.</Text>
        </Container>
      </Box>

      {/* Upcoming Events Section */}
      <Box id="events" py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={8} textAlign="center">Upcoming Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Event Card */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="Event Image" />
              <Box p={6}>
                <Heading size="md" mb={2}>Event Title</Heading>
                <Text>Date: 2023-10-01</Text>
                <Text>Location: New York</Text>
              </Box>
            </Box>
            {/* Repeat similar event cards */}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Past Events Section */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={8} textAlign="center">Past Events</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {/* Event Card */}
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="https://via.placeholder.com/400x200" alt="Event Image" />
              <Box p={6}>
                <Heading size="md" mb={2}>Event Title</Heading>
                <Text>Date: 2023-09-01</Text>
                <Text>Location: Los Angeles</Text>
              </Box>
            </Box>
            {/* Repeat similar event cards */}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.700" color="white" py={10}>
        <Container maxW="container.lg">
          <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }}>
            <Text>&copy; 2023 Event Management. All rights reserved.</Text>
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;