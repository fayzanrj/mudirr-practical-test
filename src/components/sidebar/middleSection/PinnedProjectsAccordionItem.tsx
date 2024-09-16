import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex
} from "@chakra-ui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StartIconSolid } from "@heroicons/react/24/solid";
import React from "react";
import styles from "./MiddleSection.module.scss";

// Props
interface PinnedProjectsAccordionItemProps {
  title: string;
}

const PinnedProjectsAccordionItem: React.FC<
  PinnedProjectsAccordionItemProps
> = ({ title }) => {
  const isActive = false;
  return (
    <AccordionItem className={styles["inner-accordion-item"]} paddingLeft={0}>
      <AccordionButton
        className={`${styles["pinned-inner-accordion-item-btn"]} ${
          isActive ? "pinned-inner-accordion-item-btn-active" : ""
        }`}
        _hover={{
          color: "#000000",
          fontWeight: "500",
        }}
      >
        <Flex
          as="span"
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
        >
          <span className={styles["pinned-inner-accordion-span"]}>
            {isActive ? (
              <StartIconSolid  className={styles["pinned-inner-accordion-span-icon"]} />
            ) : (
              <StarIconOutline  className={styles["pinned-inner-accordion-span-icon"]} />
            )}

            <span
              style={{
                lineHeight: "0.6rem",
                marginLeft: "0.5rem",
              }}
            >
              {title}
            </span>
          </span>

          <AccordionIcon fontSize={"1rem"} />
        </Flex>
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

export default PinnedProjectsAccordionItem;
