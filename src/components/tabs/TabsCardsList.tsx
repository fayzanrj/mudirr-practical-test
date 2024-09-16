"use client";

import ProjectProps from "@/props/ProjectProps";
import { SimpleGrid, TabPanel } from "@chakra-ui/react";
import TabsCard from "./tabCard/TabCard";
import NoProjectsFound from "./NoProjectsFound";

// Props
interface TabCardsListProps {
  data: ProjectProps[];
}

const TabsCardsList: React.FC<TabCardsListProps> = ({ data }) => {
  return data.length > 0 ? (
    <TabPanel paddingLeft={0}>
      <SimpleGrid
        spacing={4}
        marginTop={"0.5rem"}
        gridTemplateColumns="repeat(auto-fill, minmax(18rem, 1fr))"
      >
        {data.map((project) => (
          <TabsCard key={project._id} {...project} />
        ))}
      </SimpleGrid>
    </TabPanel>
  ) : (
    <TabPanel paddingLeft={0}>
      <NoProjectsFound />
    </TabPanel>
  );
};

export default TabsCardsList;
