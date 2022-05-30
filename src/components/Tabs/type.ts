import React from "react"

export type TabProps = {
  defaultActiveKey?: string;
  items: TabPaneProps[];
}

export type TabPaneProps = {
  title: string;
  key?: React.Key | null;
  icon?: React.ReactNode;
}