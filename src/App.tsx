import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "tohsaka888-word-cloud";
import font from "./assets/font.ttf";
import Header from "./components/Header";
import { LangContext } from "./Context/LangContext";
import { Box, useColorMode } from "@chakra-ui/react";
import useScreenSize from "./components/hooks/useScreenSize/useScreenSize";
import Sider from "./components/Sider";
import Content from "./components/Content";
import Card from "./components/Card";
import { AreaInfo, AreaInfoResults } from "./type";
import "flag-icons";
import CountryInfo from "./components/CountryInfo";
import BriefInfo from "./components/BriefInfo";
import CountryCharts from "./components/CountryCharts";
import SearchArea from "./components/SearchArea";
import MapSelector from "./components/MapSelector";
import { ModeContext } from "./Context/ModeContext";
import EchartsMap from "./components/EchartsMap/EchartsMap";

type ResponseData = { results: string[]; success: boolean };

function App() {
  const [province, setProvince] = useState<string[]>([]);
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const { colorMode } = useColorMode();
  const [area, setArea] = useState<string>(lang === "zh" ? "江苏省" : "China");
  const [areaInfo, setAreaInfo] = useState<AreaInfoResults[]>([]);
  const [mode, setMode] = useState<'词云' | '中国地图'>("中国地图");
  useEffect(() => {
    const getProvinceName = async () => {
      const province =
        lang === "zh"
          ? localStorage.getItem("zhProvince")
          : localStorage.getItem("enProvince");
      if (!province) {
        const res = await fetch(
          `https://lab.isaaclin.cn/nCoV/api/provinceName?lang=${lang}`,
          {
            mode: "cors",
          }
        );
        const data: ResponseData = await res.json();
        lang === "zh"
          ? localStorage.setItem("zhProvince", JSON.stringify(data.results))
          : localStorage.setItem("enProvince", JSON.stringify(data.results));
        setProvince(data.results);
      } else {
        setProvince(province ? JSON.parse(province) : []);
      }
    };
    getProvinceName();
  }, [lang]);

  useEffect(() => {
    if (areaInfo.length > 0) {
      setArea(
        lang === "zh"
          ? areaInfo[0].provinceName
          : areaInfo[0].provinceEnglishName
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    const getAreaInfo = async () => {
      const exp =
        lang === "en"
          ? `provinceEng=${area}&lang=${lang}`
          : `province=${area}&lang=${lang}`;
      const res = await fetch(`https://lab.isaaclin.cn/nCoV/api/area?${exp}`, {
        mode: "cors",
      });
      const data: AreaInfo = await res.json();
      setAreaInfo(data.results);
    };
    getAreaInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [area]);

  const size = useScreenSize();
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <ModeContext.Provider value={{ mode, setMode }}>
        <Header />
        <Content style={{ height: size.height - 60 + "px" }}>
          <Sider
            position="left"
            style={{
              height: "100%",
              width: "25vw",
              borderRight: `3px solid ${colorMode === "light" ? "#f9f9f9" : "#1b2d50"
                }`,
              padding: "8px 16px",
            }}
          >
            <SearchArea style={{ height: size.height - 440 - 200 }} >
              <EchartsMap data={[]} max={0} style={{ width: size.width / 4 - 30, height: '400px' }} theme={colorMode} info={areaInfo[0]} clickEvent={() => { }} />
            </SearchArea>
            <Card
              style={{
                width: "100%",
                height: "max-content",
                minHeight: "150px",
              }}
              key={area + 1}
            >
              <CountryInfo areaInfo={areaInfo} />
            </Card>
            <Card delay={300} key={area + 2} style={{ width: "100%" }}>
              <BriefInfo areaInfo={areaInfo} />
            </Card>
          </Sider>
          <Content>
            <Box pos={'absolute'} top={'30px'} right={'30px'} zIndex={100} >
              <MapSelector />
            </Box>
            {mode === '词云' && (
              <Container
                items={province}
                type={"text"}
                radius={20}
                width={"50vw"}
                height={"100%"}
                color={colorMode === "light" ? "#666666" : "#fff"}
                fontSize={1.2}
                font={font}
                clickEvent={(e, item) => {
                  console.log(item);
                  setArea(item);
                }}
              // style={{ zIndex: -1 }}
              />
            )}
            {mode === '中国地图' && (
              <EchartsMap data={[]} max={0} style={{ width: '50vw', height: "100%", paddingTop: '100px' }} clickEvent={(params) => setArea(params.name + '省')} />
            )}
          </Content>
          <Sider
            position="right"
            style={{
              height: "100%",
              width: "25vw",
              borderLeft: `3px solid ${colorMode === "light" ? "#f9f9f9" : "#1b2d50"
                }`,
              padding: "8px 16px",
            }}
          >
            <Card
              style={{ width: "100%", height: "50vh", flex: 1 }}
              position="right"
              key={area + 3}
            >
              <CountryCharts option={{}} source={areaInfo[0]} />
            </Card>
            <Card
              delay={300}
              position="right"
              key={area + 4}
              style={{ width: "100%", height: "50vh", flex: 1 }}
            >
              <CountryCharts option={{}} />
            </Card>
          </Sider>
        </Content>
      </ModeContext.Provider>
    </LangContext.Provider>
  );
}

export default App;
