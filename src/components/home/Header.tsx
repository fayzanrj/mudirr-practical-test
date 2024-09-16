import { Text } from "@chakra-ui/react";
import styles from "@/components/home/Home.module.scss";

const Header = () => {
  return (
    <header>
      <Text as={"h3"} className={styles["greetings-header"]}>
        Welcome Back, Haseena!
      </Text>
      <Text as={"p"} className={styles["greetings-message"]}>
        You have accomplished a lot today. Let us handle the rest
      </Text>
    </header>
  );
};

export default Header;
