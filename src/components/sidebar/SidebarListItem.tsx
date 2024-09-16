import { ListItem } from "@chakra-ui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon as StartIconSolid } from "@heroicons/react/24/solid";
import React from "react";
import styles from "./Sidebar.module.scss";

// Props
interface SidebarListItemProps {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
  isNav?: boolean;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({
  title,
  onClick = () => {},
  isActive,
  isNav,
}) => {
  return (
    <ListItem
      className={`
        ${styles["sidebar-item"]} 
        ${
          isNav
            ? styles["sidebar-item-nav-padding"]
            : styles["sidebar-item-default-padding"]
        } 
        ${
          isActive
            ? styles["sidebar-item-active"]
            : styles["sidebar-item-inactive"]
        }
        ${isNav && isActive ? styles["sidebar-item-active-background"] : ""}
      `}
      _hover={!isActive ? { color: "#000000", fontWeight: 500 } : {}}
      onClick={onClick}
    >
      <span>
        {isActive ? (
          <StartIconSolid height={"0.9rem"} width={"0.9rem"} />
        ) : (
          <StarIconOutline height={"0.9rem"} width={"0.9rem"} />
        )}
      </span>
      <span>{title}</span>
    </ListItem>
  );
};

export default SidebarListItem;
