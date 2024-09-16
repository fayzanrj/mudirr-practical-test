"use client";
import { Box, Flex, List } from "@chakra-ui/react";
import TopSection from "./topSection/TopSection";
import SidebarListItem from "./SidebarListItem";
import MiddleSection from "./middleSection/MiddleSection";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  // States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawer, setIsDrawer] = useState(false);

  // Function to check window width and update isDrawer state
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsDrawer(true);
    } else {
      setIsDrawer(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isDrawer && (
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={styles["sidebar-drawer-menu-btn"]}
          name="open-navbar-btn"
        >
          <Bars3BottomLeftIcon className={styles["sidebar-drawer-icon"]} />
        </button>
      )}
      <Flex
        className={`${
          isDrawer
            ? styles["sidebar-mobile-screen"]
            : styles["sidebar-lg-screen"]
        } ${!isDrawerOpen && isDrawer ? styles["sidebar-hidden"] : ""}`}
      >
        <TopSection
          isDrawer={isDrawer}
          onDrawerClose={() => setIsDrawerOpen(false)}
        />
        <MiddleSection />

        <Box borderTopWidth={1} borderColor={"rgb(226, 232, 240)"}>
          <List>
            <SidebarListItem title="Account Settings" />
            <SidebarListItem title="Logout" />
          </List>
        </Box>
      </Flex>
    </>
  );
};

export default Sidebar;
