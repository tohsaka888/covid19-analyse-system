import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";
import { BsSearch } from "react-icons/bs";
// import CountryCharts from "../CountryCharts";
import EchartsMap from "../EchartsMap/EchartsMap";
import useScreenSize from "../hooks/useScreenSize/useScreenSize";

function SearchArea({ ...props }: HTMLAttributes<HTMLDivElement>) {
  const size = useScreenSize();
  return (
    <Box {...props}>
      <InputGroup mb={'20px'}>
        <Input placeholder="请输入地区名称" />
        <InputRightAddon cursor={"pointer"} _hover={{ color: "#1890ff" }}>
          <BsSearch />
        </InputRightAddon>
      </InputGroup>
      <EchartsMap data={[]} max={0} style={{ width: size.width / 4 - 30, height: '400px' }} />
    </Box>
  );
}

export default SearchArea;
