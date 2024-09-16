import React from "react";
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

// Props
interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WarningModal = ({ isOpen, onClose, onConfirm }: WarningModalProps) => {
  return (
    <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Deletion</ModalHeader>
        <ModalCloseButton />
        <ModalBody fontSize={"0.85rem"}>
          Are you sure you want to delete this project? This action cannot be
          undone.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3} fontSize={"0.85rem"}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={onConfirm} fontSize={"0.85rem"}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WarningModal;
