import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import Loader from "./Loader";
import styles from "./Home.module.scss";

// Props
interface LoaderModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

const LoaderModal: React.FC<LoaderModalProps> = ({
  isOpen,
  onClose = () => {},
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent backgroundColor={"transparent"} shadow={0}>
        <ModalBody className={styles["loader-modal-body"]}>
          <Loader />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LoaderModal;
