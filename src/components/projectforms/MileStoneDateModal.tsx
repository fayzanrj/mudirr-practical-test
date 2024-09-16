import { ProjectMileStoneDate } from "@/props/ProjectProps";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import NextMilestoneDateSelect from "./NextMilestoneDateSelect";

// Props
interface MilestoneDateModalProps {
  isOpen: boolean;
  onClose: () => void;
  stepNo: number;
  onDateSet: (date: ProjectMileStoneDate) => void;
}

const MilestoneDateModal = ({
  isOpen,
  onClose,
  stepNo,
  onDateSet,
}: MilestoneDateModalProps) => {
  // State
  const [mileStoneDate, setMileStoneDate] = useState<ProjectMileStoneDate>({
    date: "",
    month: "",
  });
  const [error, setError] = useState("");

  // Function to handle values change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMileStoneDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!mileStoneDate.month || !mileStoneDate.date) {
      setError("Date is required");
      return;
    }
    onDateSet(mileStoneDate);
    setMileStoneDate({
      date: "",
      month: "",
    });
  };

  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Set Milestone Date for Step {stepNo + 1}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <NextMilestoneDateSelect
            month={mileStoneDate.month}
            date={mileStoneDate.date}
            variant="NEXT_STEP"
            onChange={handleChange}
            error={error}
          />
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor={"#5876b7"}
            color={"#ffffff"}
            mr={3}
            onClick={handleSubmit}
          >
            Set Date
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MilestoneDateModal;
