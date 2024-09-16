import ProjectForm from "@/components/projectforms/ProjectForm";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import styles from "./Tabs.module.scss";

const CreateProjectButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <button className={styles["create-project-btn"]} onClick={onOpen}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={"0.4rem"}>
          <PlusCircleIcon className={styles["create-project-icon"]} />
          <span className={styles["create-project-text"]}>
            Create a Project
          </span>
        </Flex>
      </button>

      <ProjectForm isOpen={isOpen} onClose={onClose} variant="NEW" />
    </>
  );
};

export default CreateProjectButton;
