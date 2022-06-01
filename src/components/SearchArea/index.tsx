import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
// import CountryCharts from "../CountryCharts";
// import EchartsMap from "../EchartsMap/EchartsMap";
// import useScreenSize from "../hooks/useScreenSize/useScreenSize";

function SearchArea({ ...props }: HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <Box {...props}>
      <InputGroup mb={'20px'}>
        <Input placeholder="请输入地区名称" />
        <InputRightAddon cursor={"pointer"} _hover={{ color: "#1890ff" }}>
          <BsSearch />
        </InputRightAddon>
      </InputGroup>
      {props.children}
    </Box>
  );
}

export default SearchArea;
