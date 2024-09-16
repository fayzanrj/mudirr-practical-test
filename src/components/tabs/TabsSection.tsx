"use client";
import ProjectProps from "@/props/ProjectProps";
import { useAppContext } from "@/providers/AppContextProvider";
import { Box, Flex, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loader from "../home/Loader";
import LoaderModal from "../home/LoaderModal";
import CreateProjectButton from "./CreateProjectButton";
import NoProjectsFound from "./NoProjectsFound";
import TabsCardsList from "./TabsCardsList";
import TabsListSection from "./TabsListSection";

// Props
interface TabsSectionProps {
  fetchedProjects: ProjectProps[];
}

const TabsSection: React.FC<TabsSectionProps> = ({ fetchedProjects }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  const { setProjects, projects, isLoading } = useAppContext();

  useEffect(() => {
    setProjects(fetchedProjects);
    setIsFetching(false);
  }, [fetchedProjects, setProjects, setIsFetching]);

  return (
    <>
      <LoaderModal isOpen={isLoading} onClose={() => {}} />
      <Box marginY={"3.5rem"}>
        <Tabs
          position="relative"
          variant="unstyled"
          index={selectedTab}
          onChange={(index) => setSelectedTab(index)}
        >
          <Flex
            justifyContent={"space-between"}
            wrap={"wrap-reverse"}
            rowGap={"0.5rem"}
          >
            <TabsListSection selectedTab={selectedTab} />
            <CreateProjectButton />
          </Flex>
          {isFetching ? (
            <TabPanels>
              <TabPanel textAlign={"center"} marginY={"2rem"}>
                <Loader />
              </TabPanel>
            </TabPanels>
          ) : projects.length > 0 ? (
            <TabPanels>
              <TabsCardsList
                data={projects.filter(
                  (project) => project.status === "Ongoing"
                )}
              />
              <TabsCardsList
                data={projects.filter(
                  (project) => project.status === "Completed"
                )}
              />
              <TabsCardsList
                data={projects.filter(
                  (project) => project.status === "Cancelled"
                )}
              />
              <TabsCardsList
                data={projects.filter((project) => project.status === "Draft")}
              />
            </TabPanels>
          ) : (
            <NoProjectsFound />
          )}
        </Tabs>
      </Box>
    </>
  );
};

export default TabsSection;
