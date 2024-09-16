import { Text } from "@chakra-ui/react";
import React from "react";
import styles from "./TabCard.module.scss";

// Props
interface TabCardHeaderProps {
  title: string;
}

const TabCardHeader: React.FC<TabCardHeaderProps> = ({ title }) => {
  return <Text className={styles["tab-card-header"]}>{title}</Text>;
};

export default TabCardHeader;
