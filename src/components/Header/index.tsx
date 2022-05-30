import React, { useContext } from "react";
import Tabs from "../Tabs";
import { TabPaneProps } from "../Tabs/type";
import { Container } from "./index.style";
import {
  BsGithub,
  BsMoonStarsFill,
  BsFillSunFill,
  BsTranslate,
} from "react-icons/bs";
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { LangContext } from "../../Context/LangContext";

const menuItems: TabPaneProps[] = [
  {
    title: "首页",
    key: "index",
  },
  {
    title: "新闻",
    key: "news",
  },
  {
    title: "谣言",
    key: "rumor",
  },
];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { setLang } = useContext(LangContext)!;
  return (
    <Container color={colorMode}>
      <Flex flex={1}>
        <Tabs
          items={menuItems}
          defaultActiveKey={"index"}
          style={{ color: colorMode === "light" ? "#000" : "#fff" }}
        />
      </Flex>
      <Flex width={200} justify={"space-around"}>
        <Menu>
          <MenuButton>
            <BsTranslate size={25} cursor={"pointer"} />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setLang("zh")}>简体中文</MenuItem>
            <MenuItem onClick={() => setLang("en")}>English</MenuItem>
          </MenuList>
        </Menu>
        <BsGithub size={25} cursor={"pointer"} />
        {colorMode === "dark" ? (
          <BsMoonStarsFill
            size={25}
            cursor={"pointer"}
            onClick={toggleColorMode}
          />
        ) : (
          <BsFillSunFill
            size={25}
            cursor={"pointer"}
            onClick={toggleColorMode}
          />
        )}
      </Flex>
    </Container>
  );
}

export default Header;
