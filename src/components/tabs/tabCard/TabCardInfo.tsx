import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./TabCard.module.scss";
import { ProjectMileStoneDate, ProjectStatusType } from "@/props/ProjectProps";

// Props
interface TabCardInfoProps {
  status: ProjectStatusType;
  nextMileStoneDate: ProjectMileStoneDate;
  completedStep : number
}

const TabCardInfo: React.FC<TabCardInfoProps> = ({
  nextMileStoneDate,
  status,
  completedStep
}) => {
  return (
    <Box>
      <Text className={styles["info-text"]}>{status}</Text>
      <Text className={styles["info-text"]}>
      {completedStep === 4 ? "Completed on: " : "Next milestone: "}{nextMileStoneDate.month} {nextMileStoneDate.date}
      </Text>
    </Box>
  );
};

export default TabCardInfo;
