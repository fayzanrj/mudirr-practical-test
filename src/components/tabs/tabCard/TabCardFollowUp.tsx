import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./TabCard.module.scss";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const TabCardFollowUp = () => {
  return (
    <Flex className={styles["follow-up-container"]} alignItems={"flex-end"}>
      <Text className={styles["follow-up-text"]}>Follow up with manager</Text>

      <button className={styles["send-button"]}>
        <PaperAirplaneIcon className={styles["send-icon"]} />
      </button>
    </Flex>
  );
};

export default TabCardFollowUp;
