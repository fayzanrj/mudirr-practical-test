import { Box, Divider } from "@chakra-ui/react";
import styles from "./MiddleSection.module.scss";
import PageNavigationSection from "./PageNavigationSection";
import SidebarAccordion from "./SidebarAccordion";

const MiddleSection = () => {
  return (
    <Box className={styles["middle-section"]}>
      <Box className={styles["middle-section-box"]}>
        <PageNavigationSection />
        <Divider className={styles["middle-section-divider"]} />

        <SidebarAccordion variant="WORKSPACES" data={["", "", "","", "", ""]} />
        <Divider className={styles["middle-section-divider"]} />

        <SidebarAccordion variant="LAUNCHPAD" data={["", "", "","", "", ""]} />
      </Box>

      <SidebarAccordion variant="PINNED_PROJECTS" data={["", "", ""]} />
    </Box>
  );
};

export default MiddleSection;
