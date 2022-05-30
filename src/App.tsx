import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "tohsaka888-word-cloud";
import font from "./font.ttf";
import Header from "./components/Header";
import { LangContext } from "./Context/LangContext";
import { Flex, useColorMode } from "@chakra-ui/react";
import useScreenSize from "./components/hooks/useScreenSize/useScreenSize";

type ResponseData = { results: string[]; success: boolean };

function App() {
  const [province, setProvince] = useState<string[]>([]);
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const { colorMode } = useColorMode();
  useEffect(() => {
    const getProvinceName = async () => {
      const res = await fetch(
        `https://lab.isaaclin.cn/nCoV/api/provinceName?lang=${lang}`
      );
      const data: ResponseData = await res.json();
      setProvince(data.results);
    };
    getProvinceName();
  }, [lang]);
  const size = useScreenSize();
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <Flex justify={"center"}>
        <Container
          items={province}
          type={"text"}
          radius={20}
          width={size.height - 60 + "px"}
          height={size.height - 60 + "px"}
          color={colorMode === "light" ? "#666666" : "#fff"}
          fontSize={1.2}
          font={font}
        />
      </Flex>
    </LangContext.Provider>
  );
}

export default App;
