import FixedFooter from "@/components/home/FixedFooter";
import Header from "@/components/home/Header";
import styles from "@/components/home/Home.module.scss";
import ServerError from "@/components/home/ServerError";
import StatusList from "@/components/home/StatusList";
import Sidebar from "@/components/sidebar/Sidebar";
import TabsSection from "@/components/tabs/TabsSection";
import ProjectProps from "@/props/ProjectProps";

const Home = async () => {
  let projects: ProjectProps[] = [];

  try {
    // Fetching projects
    const response = await fetch(`${process.env.HOST}/api/getProjects`, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const res = await response.json();
    projects = res?.projects || [];
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return <ServerError />;
  }

  return (
    <>
      <Sidebar />
      <main className={styles["container"]}>
        <Header />
        <StatusList />
        <TabsSection fetchedProjects={projects} />
        <FixedFooter />
      </main>
    </>
  );
};

export default Home;
