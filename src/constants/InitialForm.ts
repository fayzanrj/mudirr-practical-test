import ProjectProps from "@/props/ProjectProps";

const INITIAL_FORM: ProjectProps = {
  title: "",
  type: "",
  nextMileStoneDate: {
    month: "",
    date: "",
  },
  status: "Ongoing",
  latestCompletedStep: 0,
};

export default INITIAL_FORM