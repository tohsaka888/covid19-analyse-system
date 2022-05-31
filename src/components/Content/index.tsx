import { Flex } from "@chakra-ui/react";
import React, { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
};

function Content({
  children,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) {
  return (
    <Flex justify={"center"} pos={"relative"} {...props}>
      {children}
    </Flex>
  );
}

export default Content;
