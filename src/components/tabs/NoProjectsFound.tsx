import React from "react";
import styles from "./Tabs.module.scss";

const NoProjectsFound = () => {
  return (
    <div className={styles["no-project-found"]}>
      <h3 className={styles["no-project-found-text"]}>No Projects Found</h3>
      <h3 className={styles["no-project-found-text"]}>Start by creating one</h3>
    </div>
  );
};

export default NoProjectsFound;
