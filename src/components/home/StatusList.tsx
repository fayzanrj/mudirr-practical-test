"use client";
import countProjectsByStatus from "@/libs/CountProjectsByStatus";
import { ProjectStatusType } from "@/props/ProjectProps";
import { useAppContext } from "@/providers/AppContextProvider";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import STATUS_DATA from "@/constants/StatusData";

const StatusList: React.FC = () => {
  const { projects } = useAppContext();

  // State to store the status counts
  const [statusCounts, setStatusCounts] = useState<
    Record<ProjectStatusType, number>
  >({
    Completed: 0,
    Ongoing: 0,
    Draft: 0,
    Cancelled: 0,
  });

  useEffect(() => {
    const counts = countProjectsByStatus(projects);
    setStatusCounts(counts);
  }, [projects]);

  return (
    <Flex my={"1.5rem"} flexWrap={"wrap"} gap={"0.5rem"}>
      {STATUS_DATA.map((obj) => (
        <Flex key={obj.status} className={styles["status-list-item"]}>
          <Image
            src={obj.src}
            width={999}
            height={999}
            className={styles["status-list-icon"]}
            alt={obj.status}
          />
          <Box>
            <Text className={styles["status-list-count"]}>
              {statusCounts[obj.status as ProjectStatusType] ?? 0}
            </Text>
            <Text className={styles["status-list-text"]}>{obj.status}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default StatusList;
