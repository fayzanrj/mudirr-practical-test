"use client";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Home.module.scss";

const ServerError = () => {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Container className={styles["server-error"]}>
      <Box className={styles["content"]}>
        <Text className={styles["error-text"]}>
          Oops! Something went wrong on our end.
        </Text>
        <Text className={styles["additional-text"]}>
          Please try reloading the page.
        </Text>
        <Button className={styles["reload-button"]} onClick={reloadPage}>
          Reload Page
        </Button>
      </Box>
    </Container>
  );
};

export default ServerError;
