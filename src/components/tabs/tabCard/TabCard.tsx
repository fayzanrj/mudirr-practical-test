import { Card, Flex, Text } from "@chakra-ui/react";
import TabCardFollowUp from "./TabCardFollowUp";
import TabCardHeader from "./TabCardHeader";
import TabCardInfo from "./TabCardInfo";
import TabCardMenu from "./TabCardMenu";
import TabCardProgress from "./TabCardProgress";
import styles from "./TabCard.module.scss";
import ProjectProps from "@/props/ProjectProps";

const TabCard: React.FC<ProjectProps> = (props) => {
  // Destructuring
  const { title, type, latestCompletedStep, nextMileStoneDate, status } = props;

  return (
    <Card className={styles["tab-card"]}>
      <Flex alignItems={"flex-start"} justifyContent={"space-between"}>
        <TabCardHeader title={title} />
        <TabCardMenu {...props} />
      </Flex>

      <Text className={styles["tab-card-type"]}>{type}</Text>

      <TabCardProgress completedStep={latestCompletedStep} projectData={props} />
      <TabCardInfo nextMileStoneDate={nextMileStoneDate} status={status} completedStep={latestCompletedStep}/>
      <TabCardFollowUp />
    </Card>
  );
};
export default TabCard;
