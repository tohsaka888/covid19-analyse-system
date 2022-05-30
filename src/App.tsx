import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "tohsaka888-word-cloud";
import font from "./font.ttf";
import Header from "./components/Header";
import { LangContext } from "./Context/LangContext";
import { useColorMode } from "@chakra-ui/react";

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
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <Container
        items={province}
        type={"text"}
        radius={20}
        width="100%"
        height="100vh"
        color={colorMode === "light" ? "#666666" : "#fff"}
        fontSize={1.2}
        font={font}
      />
    </LangContext.Provider>
  );
}

export default App;
