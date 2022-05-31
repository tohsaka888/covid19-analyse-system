import { useColorMode } from "@chakra-ui/react";
import React, { HTMLAttributes, useEffect } from "react";
import { animated, config, useSpring } from "react-spring";
import { shadows } from "../../theme";

type Props = {
  children: React.ReactNode;
  delay?: number;
  position?: "left" | "right";
} & HTMLAttributes<HTMLDivElement>;

function Card({
  children,
  style,
  position = "left",
  delay = 0,
  ...props
}: Props) {
  const { colorMode } = useColorMode();

  const [move, setMove] = useSpring(() => ({
    transform: `translate3d(${position === "left" ? "-100%" : "100%"},0,0)`,
    display: "none",
  }));

  useEffect(() => {
    setMove.start({
      transform: "translate3d(0,0,0)",
      display: "block",
      config: config.wobbly,
      delay: delay,
    });
    return () => {
      setMove.start({
        transform: `translate3d(${position === "left" ? "-100%" : "100%"},0,0)`,
        display: "none",
        config: config.wobbly,
        delay: delay,
      });
    };
  }, [delay, position, setMove]);

  return (
    <animated.div
      style={{
        ...style,
        ...move,
        margin: "32px 0px",
        padding: "12px 18px",
        boxShadow: shadows[colorMode],
        borderRadius: "8px",
        height: "max-content",
        minHeight: "150px",
      }}
      {...props}
    >
      {children}
    </animated.div>
  );
}

export default Card;
