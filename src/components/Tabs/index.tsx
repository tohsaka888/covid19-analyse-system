import { Flex } from "@chakra-ui/react";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { TabPaneProps, TabProps } from "./type";
import { Container } from "./index.style";
import { animated, useSpring, config } from "react-spring";

function TabPane({
  title,
  icon,
  isActive = false,
  activeRef,
  ...props
}: TabPaneProps & {
  isActive: boolean;
  activeRef?: MutableRefObject<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex
      cursor={"pointer"}
      pos={"relative"}
      ref={activeRef}
      userSelect={"none"}
      height={"100%"}
      align="center"
      padding={"0px 24px"}
      {...props}
    >
      <Container isActive={isActive}>
        {icon}
        <span>{title}</span>
      </Container>
    </Flex>
  );
}

function UnderLine({
  activeRef,
}: {
  activeRef: MutableRefObject<HTMLDivElement>;
}) {
  const [style, setStyle] = useSpring(() => ({
    width: 0,
    left: 0,
  }));
  useEffect(() => {
    if (activeRef.current) {
      setStyle.start({
        width: activeRef.current.offsetWidth,
        left: activeRef.current.offsetLeft,
        config: config.gentle,
      });
    }
  }, [activeRef, setStyle]);

  return (
    <animated.div
      style={{
        height: "2px",
        position: "absolute",
        bottom: "0px",
        background: "#1890ff",
        ...style,
      }}
    />
  );
}

function Tabs({
  items,
  defaultActiveKey,
  ...props
}: TabProps & React.HTMLAttributes<HTMLDivElement>) {
  const activeRef = useRef<HTMLDivElement>(null!);
  const [activeKey, setActiveKey] = useState<React.Key>(defaultActiveKey || "");
  return (
    <Flex pos={"relative"} height="60px" {...props}>
      {items.map((item) => (
        <TabPane
          key={item.key}
          title={item.title}
          isActive={item.key === activeKey}
          activeRef={item.key === activeKey ? activeRef : undefined}
          onClick={() => setActiveKey(item.key || "")}
          {...props}
        />
      ))}
      <UnderLine activeRef={activeRef} key={activeKey} />
    </Flex>
  );
}

export default Tabs;
