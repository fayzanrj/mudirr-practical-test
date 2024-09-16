import FOOTER_BTNS_DATA from "@/constants/FooterButtonsData";
import { Flex } from "@chakra-ui/react";
import styles from "./Home.module.scss";

const FixedFooter = () => {
  return (
    <Flex className={styles["fixed-footer"]}>
      {FOOTER_BTNS_DATA.map((button, index) => (
        <Flex key={index} className={styles["fixed-footer-btn"]}>
          <button.icon className={styles["fixed-footer-btn-icon"]} />
          {button.label}
        </Flex>
      ))}
    </Flex>
  );
};

export default FixedFooter;
