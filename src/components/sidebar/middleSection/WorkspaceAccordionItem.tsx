import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";
import styles from "./MiddleSection.module.scss";
// Props
interface WorkspaceAccordionItemProps {
  title: string;
}

const WorkspaceAccordionItem: React.FC<WorkspaceAccordionItemProps> = ({
  title,
}) => {
  return (
    <AccordionItem className={styles["inner-accordion-item"]}>
      <AccordionButton className={styles["workspace-inner-accordion-item-btn"]}>
        <Box
          as="span"
          className={styles["workspace-inner-accordion-item-btn-box"]}
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

export default WorkspaceAccordionItem;
