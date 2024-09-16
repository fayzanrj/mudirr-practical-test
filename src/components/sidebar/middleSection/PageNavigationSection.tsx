import { List } from "@chakra-ui/react";
import SidebarListItem from "../SidebarListItem";

const PageNavigationSection = () => {
  return (
    <List paddingBottom={"0.3rem"}>
      <SidebarListItem title="Dashboard" isNav isActive />
      <SidebarListItem title="Project History" isNav />
      <SidebarListItem title="Client History" isNav />
      <SidebarListItem title="Emails" isNav />
    </List>
  );
};

export default PageNavigationSection;
