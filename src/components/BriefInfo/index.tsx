import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { AreaInfoResults } from "../../type";

type Props = {
  areaInfo: AreaInfoResults[];
};
function BriefInfo({ areaInfo }: Props) {
  return (
    <Box>
      {areaInfo.map((area, index) => (
        <React.Fragment key={index}>
          <Flex align={"center"}>
            <BsFillChatLeftDotsFill size={20} />
            <Text fontSize={"1.2rem"} ml={"16px"}>
              疫情信息概览
            </Text>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>现存确诊人数:</Text>
            <Flex>
              <Text color={"#1890ff"} fontWeight={"bold"}>
                {area.currentConfirmedCount}
              </Text>
              <Text>人</Text>
            </Flex>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>累计确诊人数:</Text>
            <Text>{area.confirmedCount}人</Text>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>疑似感染人数:</Text>
            <Flex>
              <Text color={"orange"}>{area.suspectedCount}</Text>人
            </Flex>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>治愈人数:</Text>
            <Flex>
              <Text color={"pink"} fontWeight={"bold"}>
                {area.curedCount}
              </Text>
              人
            </Flex>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>死亡人数:</Text>
            <Flex>
              <Text color={"red"} fontWeight={"bold"}>
                {area.deadCount}
              </Text>
              人
            </Flex>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex justify={"space-between"} align="center">
            <Text>下级城市数据量:</Text>
            <Text>{area.cities ? area.cities?.length : 0}个</Text>
          </Flex>
        </React.Fragment>
      ))}
    </Box>
  );
}

export default BriefInfo;
