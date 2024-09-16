import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import styles from "./TopSection.module.scss";
import { XMarkIcon } from "@heroicons/react/24/solid";
import sidebarStyles from "../Sidebar.module.scss";
import USERS from "@/constants/Users";

// Props
interface TopSectionProps {
  isDrawer: boolean | undefined;
  onDrawerClose: () => void;
}

const TopSection: React.FC<TopSectionProps> = ({ isDrawer, onDrawerClose }) => {
  return (
    <Flex className={styles["sidebar-section"]}>
      <Image src="/Logo.svg" width={90} height={31} alt="logo" />

      {/* MENU CLOSE BTN */}
      {isDrawer && (
        <button
          onClick={onDrawerClose}
          className={sidebarStyles["sidebar-drawer-close-btn"]}
        >
          <XMarkIcon className={sidebarStyles["sidebar-drawer-icon"]} />
        </button>
      )}
      <Menu>
        <MenuButton
          as={Button}
          className={styles["menu-button"]}
          rightIcon={<ChevronDownIcon />}
        >
          <Flex className={styles["menu-content"]}>
            <Avatar size="sm" src={USERS[0].avatar}  />
            <Box className={styles["user-info"]}>
              <Text className={styles["user-name"]}>{USERS[0].name}</Text>
              <Text className={styles["user-email"]} title={USERS[0].email}>
                {USERS[0].email}
              </Text>
            </Box>
          </Flex>
        </MenuButton>
        <MenuList className={styles["menu-list"]}>
          {USERS.map((user, index) => (
            <MenuItem key={index} className={styles["menu-item"]}>
              <Flex className={styles["menu-content"]}>
                <Avatar size="sm" src={user.avatar} />
                <Box className={styles["user-info"]}>
                  <Text className={styles["user-name"]}>{user.name}</Text>
                  <Text className={styles["user-email"]} title={user.email}>
                    {user.email}
                  </Text>
                </Box>
              </Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Flex className={styles["button-group"]}>
        <button className={styles["button-selected"]}>Personal</button>
        <button className={styles["button-unselected"]}>Invited</button>
      </Flex>
    </Flex>
  );
};

export default TopSection;
