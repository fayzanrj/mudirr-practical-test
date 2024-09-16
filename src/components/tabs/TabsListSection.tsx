import { Tab, TabIndicator, TabList } from "@chakra-ui/react";
import styles from "./Tabs.module.scss";
import TABS_DATA from "@/constants/TabsData";

// Props
interface TabsListSectionProps {
  selectedTab: number;
}

const TabsListSection: React.FC<TabsListSectionProps> = ({selectedTab}) => {
  return (
    <TabList className={styles["tab-list"]}>
      {TABS_DATA.map((status, index) => (
        <Tab
          key={status}
          fontSize={"0.7rem"}
          className={`${styles.tab} ${
            selectedTab === index ? styles["tab-selected"] : ""
          }`}
        >
          {status}
        </Tab>
      ))}
      <TabIndicator
        className={styles["tab-indicator"]}
        backgroundColor={"#5876b7"}
      />
    </TabList>
  );
};

export default TabsListSection;
