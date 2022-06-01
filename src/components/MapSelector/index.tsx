import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { HTMLAttributes, useContext } from "react";
import { ModeContext } from "../../Context/ModeContext";

function MapSelector({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const { setMode, mode } = useContext(ModeContext)!
  return (
    <Menu {...props}>
      <MenuButton
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        bg={"blue.500"}
        color="#fff"
        padding={'5px 12px'}
      >
        {mode}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setMode("词云")}>词云</MenuItem>
        <MenuItem onClick={() => setMode("中国地图")}>中国地图</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MapSelector;
