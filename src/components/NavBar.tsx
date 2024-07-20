import { HStack, Image } from "@chakra-ui/react";
import Logo from "/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={Logo} alt="logo" boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
