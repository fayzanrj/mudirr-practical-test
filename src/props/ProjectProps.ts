export type ProjectStatusType = "Ongoing" | "Completed" | "Draft" | "Cancelled";
export type ProjectMileStoneDate = {
  month: string;
  date: string;
};

interface ProjectProps {
  _id?: string;
  title: string;
  nextMileStoneDate: ProjectMileStoneDate;
  latestCompletedStep: number;
  type: string;
  status: ProjectStatusType;
}

export default ProjectProps;
