import { Box } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  position?: "left" | "right";
};

function Sider({
  children,
  position = "left",
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <Box
      pos={"absolute"}
      left={position === "left" ? 0 : undefined}
      right={position === "right" ? 0 : undefined}
      {...props}
    >
      {children}
    </Box>
  );
}

export default Sider;
