import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";
import { useProjectForm } from "@/hooks/useProjectForm";
import ProjectTextInput from "./ProjectTextInput";
import NextMilestoneDateSelect from "./NextMilestoneDateSelect";
import ProjectStatusSelect from "./ProjectStatusSelect";
import initialForm from "@/constants/InitialForm";
import { useAppContext } from "@/providers/AppContextProvider";
import ProjectProps from "@/props/ProjectProps";

// Props
interface ProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
  variant: "NEW" | "UPDATE";
  id?: string;
  initialFormData?: ProjectProps;
}

const ProjectForm = ({
  isOpen,
  onClose,
  initialFormData,
  id,
  variant,
}: ProjectFormProps) => {
  const { formData, handleChange, errors, validateForm, setFormData } =
    useProjectForm(initialFormData);

  const { addProject, updateProject } = useAppContext();

  const handleSubmit = () => {
    if (validateForm()) {
      variant === "NEW" ? addProject(formData) : updateProject(id!, formData);
      variant === "NEW" && setFormData(initialForm);
      onClose(); 
    } 
  };

  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProjectTextInput
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            error={errors.title}
            minLength={45}
            maxLength={60}
            required
          />
          <ProjectTextInput
            name="type"
            value={formData.type}
            onChange={handleChange}
            error={errors.type}
            placeholder="Enter project type"
            minLength={3}
            maxLength={20}
            required
          />
          {variant === "NEW" && (
            <NextMilestoneDateSelect
              month={formData.nextMileStoneDate.month}
              date={formData.nextMileStoneDate.date}
              onChange={handleChange}
              error={errors.nextMileStoneDate}
            />
          )}
          <ProjectStatusSelect
            status={formData.status}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            backgroundColor={"#5876b7"}
            color={"#ffffff"}
            mr={3}
            onClick={handleSubmit}
          >
            {variant === "NEW" ? "Create Project" : "Update Project"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectForm;
