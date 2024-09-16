import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import LaunchPadAccordionItem from "./LaunchPadAccordionItem";
import styles from "./MiddleSection.module.scss";
import PinnedProjectsAccordionItem from "./PinnedProjectsAccordionItem";
import WorkspaceAccordionItem from "./WorkspaceAccordionItem";

// Props
interface SidebarAccordionProps {
  variant: "LAUNCHPAD" | "WORKSPACES" | "PINNED_PROJECTS";
  data: string[];
}

const SidebarAccordion: React.FC<SidebarAccordionProps> = ({
  variant,
  data,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle toggle
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Determining the items to display
  const visibleItems = isExpanded ? data : data.slice(0, 3);

  return (
    <Accordion allowMultiple className={styles["middle-section-accordion"]}>
      <AccordionItem className={styles["accordian-main-item"]}>
        <AccordianMainButton
          title={
            variant === "PINNED_PROJECTS" ? "PINNED PROJECTS (3/3)" : variant
          }
        />

        <AccordionPanel
          className={styles["accordion-main-panel"]}
          pl={variant === "WORKSPACES" ? "" : "0.6rem"}
        >
          <Accordion allowMultiple className={styles["inner-accordion"]}>
            {visibleItems.map((item, index) => {
              return variant === "LAUNCHPAD" ? (
                <LaunchPadAccordionItem
                  key={index}
                  title={`Business Name ${index + 1}`}
                />
              ) : variant === "PINNED_PROJECTS" ? (
                <PinnedProjectsAccordionItem
                  key={index}
                  title={`Project Name ${index + 1}`}
                />
              ) : (
                <WorkspaceAccordionItem
                  key={index}
                  title={`Work Space Name ${index + 1}`}
                />
              );
            })}
          </Accordion>

          {/* Shows 'See All' or 'See Less' button if more than 3 items */}
          {data.length > 3 && (
            <button className={styles["sell-all-btn"]} onClick={handleToggle}>
              {isExpanded ? "See Less" : "See All"}
            </button>
          )}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SidebarAccordion;

// Props
interface AccordianMainButtonProps {
  title: string;
}
const AccordianMainButton: React.FC<AccordianMainButtonProps> = ({ title }) => (
  <AccordionButton padding={0} _hover={{}} position={"relative"}>
    <AccordionIcon fontSize={"1rem"} />
    <Box as="span" className={styles["accordion-main-item-btn"]}>
      {title}

      {title === "WORKSPACES" && (
        <Text className={styles["coming-soon-text"]}>Coming Soon</Text>
      )}
    </Box>
  </AccordionButton>
);
