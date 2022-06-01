import { Flex, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";

function SearchArea({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex {...props}>
      <InputGroup>
        <Input placeholder="请输入地区名称" />
        <InputRightAddon cursor={"pointer"} _hover={{ color: "#1890ff" }}>
          <BsSearch />
        </InputRightAddon>
      </InputGroup>
    </Flex>
  );
}

export default SearchArea;
