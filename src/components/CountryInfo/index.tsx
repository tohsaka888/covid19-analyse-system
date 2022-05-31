import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import moment from "moment";
import React, { Suspense, useContext } from "react";
import { searchCode } from "../../assets/searchCode";
import { LangContext } from "../../Context/LangContext";
import { AreaInfoResults } from "../../type";

type Props = {
  areaInfo: AreaInfoResults[];
};

function CountryInfo({ areaInfo }: Props) {
  const { lang } = useContext(LangContext)!;
  return (
    <Suspense fallback={"Loading......"}>
      {areaInfo.map((area) => (
        <Box key={area.countryEnglishName}>
          <Flex align={"center"} justify={"space-between"}>
            <Text fontSize={"1.2rem"}>当前选择国家:</Text>

            <Flex align={"center"}>
              <span
                className={`fi fi-${searchCode(area.countryEnglishName)}`}
                style={{
                  width: "24px",
                  aspectRatio: "4 / 3",
                }}
              />

              <Text fontSize={"1.2rem"} ml={"3px"}>
                {lang === "zh" ? area.countryName : area.countryEnglishName}
              </Text>
            </Flex>
          </Flex>
          <Divider mt={"8px"} />
          <Flex align={"center"} justify={"space-between"} mt={"12px"}>
            <Text fontSize={"1rem"} mr={"12px"}>
              更新时间:
            </Text>
            <Text fontSize={"1rem"} ml={"3px"}>
              {moment(area.updateTime).format("YYYY-MM-DD HH:mm:ss")}
            </Text>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex align={"center"} justify={"space-between"}>
            <Text fontSize={"1rem"} mr={"12px"}>
              所属洲名称:
            </Text>
            <Text fontSize={"1rem"} ml={"3px"}>
              {lang === "zh" ? area.continentName : area.continentEnglishName}
            </Text>
          </Flex>
          <Divider margin={"8px 0px"} />
          <Flex align={"center"} justify={"space-between"}>
            <Text fontSize={"1rem"} mr={"12px"}>
              当前选择省/市:
            </Text>
            <Text fontSize={"1rem"} ml={"3px"}>
              {lang === "zh" ? area.provinceName : area.provinceEnglishName}
            </Text>
          </Flex>
        </Box>
      ))}
    </Suspense>
  );
}

export default CountryInfo;
