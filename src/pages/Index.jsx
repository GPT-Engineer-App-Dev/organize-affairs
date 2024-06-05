import { Box, Container, Flex, Heading, HStack, Link, Text, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => (
  <Box bg="brand.800" color="white" px={4} py={2}>
    <Flex h={16} alignItems="center" justifyContent="space-between">
      <Heading size="md">Event Management</Heading>
      <HStack as="nav" spacing={4}>
        <Link href="#home">Home</Link>
        <Link href="#events">Events</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </HStack>
    </Flex>
  </Box>
);

const HeroSection = () => (
  <Box id="home" bg="gray.100" py={20} textAlign="center">
    <Heading>Welcome to Event Management Platform</Heading>
    <Text fontSize="lg" mt={4}>Your one-stop solution for managing and attending events.</Text>
  </Box>
);

const EventCard = ({ title, date, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
    <Heading size="md">{title}</Heading>
    <Text fontSize="sm" color="gray.500">{date}</Text>
    <Text mt={2}>{description}</Text>
  </Box>
);

const EventsSection = ({ title, events }) => (
  <Box id="events" py={20} bg="white">
    <Container maxW="container.lg">
      <Heading mb={8}>{title}</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </SimpleGrid>
    </Container>
  </Box>
);

const Footer = () => (
  <Box bg="brand.900" color="white" py={10}>
    <Container maxW="container.lg">
      <Flex justifyContent="space-between" alignItems="center" flexDirection={{ base: "column", md: "row" }}>
        <Text>&copy; {new Date().getFullYear()} Event Management. All rights reserved.</Text>
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
          <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
          <Link href="https://instagram.com" isExternal><FaInstagram /></Link>
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const Index = () => {
  const upcomingEvents = [
    { title: "Event 1", date: "2023-10-01", description: "Description for event 1" },
    { title: "Event 2", date: "2023-11-15", description: "Description for event 2" },
    { title: "Event 3", date: "2023-12-05", description: "Description for event 3" },
  ];

  const pastEvents = [
    { title: "Event A", date: "2023-01-20", description: "Description for event A" },
    { title: "Event B", date: "2023-03-15", description: "Description for event B" },
    { title: "Event C", date: "2023-06-10", description: "Description for event C" },
  ];

  return (
    <Box>
      <Navbar />
      <HeroSection />
      <EventsSection title="Upcoming Events" events={upcomingEvents} />
      <EventsSection title="Past Events" events={pastEvents} />
      <Footer />
    </Box>
  );
};

export default Index;