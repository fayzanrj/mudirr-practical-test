import ProjectProps, { ProjectStatusType } from "@/props/ProjectProps";

const validateProjectData = (data: ProjectProps) => {
  const { title, nextMileStoneDate, latestCompletedStep, type, status } = data;

  let valid = true;
  const errors: {
    title?: string;
    nextMileStoneDate?: string;
    latestCompletedStep?: string;
    type?: string;
    status?: string;
  } = {};

  // Validating `title`
  if (!title) {
    valid = false;
    errors.title = "Title is required";
  } else if (title.length < 20 || title.length > 60) {
    valid = false;
    errors.title = "Title must be between 20 and 60 characters";
  }

  // Validating `nextMileStoneDate`
  if (!nextMileStoneDate.month || !nextMileStoneDate.date) {
    valid = false;
    errors.nextMileStoneDate = "Date is required";
  }

  // Validating `latestCompletedStep`
  if (typeof latestCompletedStep !== "number" || latestCompletedStep < 0) {
    valid = false;
    errors.latestCompletedStep = "Invalid latest completed step";
  }

  // Validating `type`
  if (!type) {
    valid = false;
    errors.type = "Project type is required";
  } else if (type.length < 3 || type.length > 20) {
    valid = false;
    errors.type = "Project type must be between 3 and 20 characters";
  }

  // Validating `status`
  const validStatuses: ProjectStatusType[] = [
    "Ongoing",
    "Completed",
    "Draft",
    "Cancelled",
  ];

  if (!validStatuses.includes(status)) {
    valid = false;
    errors.status = "Invalid project status";
  }

  return { valid, errors };
};

export default validateProjectData;
