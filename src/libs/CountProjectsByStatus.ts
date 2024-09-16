import ProjectProps from "@/props/ProjectProps";

const countProjectsByStatus = (projects: ProjectProps[]) => {
  const statusCounts = {
    Ongoing: 0,
    Completed: 0,
    Cancelled: 0,
    Draft: 0,
  };

  projects.forEach((project) => {
    if (statusCounts[project.status] !== undefined) {
      statusCounts[project.status] += 1;
    }
  });

  return statusCounts;
};

export default countProjectsByStatus;
