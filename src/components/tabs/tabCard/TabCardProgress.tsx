import MilestoneDateModal from "@/components/projectforms/MileStoneDateModal";
import {
  Box,
  Flex,
  Progress,
  Step,
  StepIndicator,
  Stepper,
  StepStatus,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "./TabCard.module.scss";
import { useAppContext } from "@/providers/AppContextProvider";
import ProjectProps, { ProjectMileStoneDate } from "@/props/ProjectProps";
import { MONTHS } from "@/constants/DaysInMonth";

const steps = ["", "", "", ""];

// Props
interface TabCardProgressProps {
  completedStep: number;
  projectData: ProjectProps;
}

const TabCardProgress: React.FC<TabCardProgressProps> = ({
  completedStep,
  projectData,
}) => {
  // States
  const [activeStep, setActiveStep] = useState(completedStep - 1);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(completedStep - 1);

  const { updateProject } = useAppContext();

  const maxStep = steps.length - 1;

  const updateProjectData = (step: number, date?: ProjectMileStoneDate) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    const {
      latestCompletedStep,
      status,
      nextMileStoneDate,
      ...restOfProjectData
    } = projectData;
    /* eslint-enable @typescript-eslint/no-unused-vars */

    updateProject(projectData._id!, {
      latestCompletedStep: step + 1,
      nextMileStoneDate: date || {
        month: MONTHS[new Date().getMonth() + 1],
        date: new Date().getDate().toString(),
      },
      status:
        step === maxStep
          ? "Completed"
          : status === "Completed"
          ? "Ongoing"
          : status,
      ...restOfProjectData,
    });

    setActiveStep(step);
  };

  // Handling step click events
  const handleStepClick = (index: number) => {
    setCurrentStep(index);

    // if already active step is clicked
    if (index === activeStep) return;

    if (index === maxStep) {
      // Updating project data when reaching the last step
      updateProjectData(index);
    } else {
      // Opening date modal for intermediate steps
      setIsDateModalOpen(true);
    }
  };

  // Handling date set from the modal
  const handleDateSet = (date: ProjectMileStoneDate) => {
    updateProjectData(currentStep, date);
    setIsDateModalOpen(false);
  };

  return (
    <Flex className={styles["stepper-wrapper"]}>
      <Box className={styles["stepper-container"]}>
        <Stepper
          size="sm"
          index={activeStep}
          gap="0"
          className={styles["stepper"]}
          position={"relative"}
        >
          {steps.map((step, index) => (
            <Step key={index} onClick={() => handleStepClick(index)}>
              <StepIndicator
                className={`${styles["step-indicator"]} ${
                  activeStep >= index ? styles["step-active"] : ""
                }`}
              >
                <StepStatus />
              </StepIndicator>
            </Step>
          ))}
        </Stepper>
        <Progress
          value={activeStep > -1 ? (activeStep / maxStep) * 100 : 0}
          className={styles["progress-bar"]}
          style={{ backgroundColor: "#DADAD7" }}
        />
      </Box>
      <Box>
        <Text className={styles["step-info"]}>
          {activeStep + 1}/{steps.length} Done
        </Text>
      </Box>

      {/* Conditionally rendering the Milestone Date Modal */}
      <MilestoneDateModal
        isOpen={isDateModalOpen}
        onClose={() => setIsDateModalOpen(false)}
        stepNo={currentStep + 1}
        onDateSet={handleDateSet}
      />
    </Flex>
  );
};

export default TabCardProgress;
