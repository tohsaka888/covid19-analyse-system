import { Flex, Text } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

function SearchArea({ ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex {...props}>
      <Text fontSize={"2rem"}>暂定搜索区域</Text>
    </Flex>
  );
}

export default SearchArea;
