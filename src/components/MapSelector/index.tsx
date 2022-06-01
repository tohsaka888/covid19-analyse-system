import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React, { HTMLAttributes, useState } from "react";

function MapSelector({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const [current, setCurrent] = useState<string>("词云");
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
        {current}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => setCurrent("词云")}>词云</MenuItem>
        <MenuItem onClick={() => setCurrent("中国地图")}>中国地图</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MapSelector;
