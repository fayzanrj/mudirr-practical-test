import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import styles from "./MiddleSection.module.scss";
import Image from "next/image";

// Props
interface LaunchPadAccordionItemProps {
  title: string;
}

const LaunchPadAccordionItem: React.FC<LaunchPadAccordionItemProps> = ({
  title,
}) => {
  return (
    <AccordionItem className={styles["inner-accordion-item"]} paddingLeft={0}>
      <AccordionButton className={styles["launchpad-inner-accordion-item-btn"]}>
        <Image src={"/Logo_launchpad.png"} width={17} height={17} alt="logo" />
        <Box
          as="span"
          className={styles["launchpad-inner-accordion-item-btn-box"]}
        >
          {title}
          <AccordionIcon fontSize={"1rem"} />
        </Box>
      </AccordionButton>
      <AccordionPanel className={styles["item-panel"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  );
};

export default LaunchPadAccordionItem;
