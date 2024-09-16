import ProjectForm from "@/components/projectforms/ProjectForm";
import WarningModal from "@/components/projectforms/WarningModal";
import ProjectProps from "@/props/ProjectProps";
import { useAppContext } from "@/providers/AppContextProvider";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import styles from "./TabCard.module.scss";

const TabCardMenu: React.FC<ProjectProps> = ({ _id, ...props }) => {
  const [isWarningModalOpen, setWarningModalOpen] = useState(false);
  const [isProjectFormOpen, setProjectFormOpen] = useState(false);

  const { deleteProject } = useAppContext();

  const handleDeleteClick = () => {
    setWarningModalOpen(true);
  };

  const handleEditClick = () => {
    setProjectFormOpen(true);
  };

  const handleWarningModalClose = () => {
    setWarningModalOpen(false);
  };

  const handleProjectFormClose = () => {
    setProjectFormOpen(false);
  };

  const handleConfirmDelete = () => {
    deleteProject(_id!);
    handleWarningModalClose();
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={
            <EllipsisVerticalIcon height={"1.7rem"} style={{ padding: 0 }} />
          }
          className={styles["tab-card-menu-btn"]}
          _hover={{ backgroundColor: "transparent" }}
        />
        <MenuList zIndex={4}>
          <MenuItem
            icon={<EditIcon />}
            fontSize={"0.85rem"}
            onClick={handleEditClick}
          >
            Edit Project
          </MenuItem>
          <MenuItem
            icon={<DeleteIcon />}
            fontSize={"0.85rem"}
            onClick={handleDeleteClick}
          >
            Delete Project
          </MenuItem>
        </MenuList>
      </Menu>

      <WarningModal
        isOpen={isWarningModalOpen}
        onClose={handleWarningModalClose}
        onConfirm={handleConfirmDelete}
      />

      <ProjectForm
        isOpen={isProjectFormOpen}
        onClose={handleProjectFormClose}
        variant="UPDATE"
        id={_id}
        initialFormData={{ ...props }}
      />
    </>
  );
};

export default TabCardMenu;
