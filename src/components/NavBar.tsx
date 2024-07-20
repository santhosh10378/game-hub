import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo} alt="logo" boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
