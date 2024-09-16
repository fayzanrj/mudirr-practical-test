import validateProjectData from "@/libs/ValidateProjectData";
import ProjectProps from "@/props/ProjectProps";
import { useState } from "react";

export const useProjectForm = (initialFormData?: ProjectProps) => {
  const [formData, setFormData] = useState<ProjectProps>({
    title: initialFormData?.title || "",
    type: initialFormData?.type || "",
    nextMileStoneDate: {
      month: initialFormData?.nextMileStoneDate?.month || "",
      date: initialFormData?.nextMileStoneDate?.date || "",
    },
    status: initialFormData?.status || "Ongoing",
    latestCompletedStep: initialFormData?.latestCompletedStep || 0,
  });

  const [errors, setErrors] = useState<{
    title?: string;
    type?: string;
    nextMileStoneDate?: string;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "month" || name === "date") {
      setFormData((prevData) => ({
        ...prevData,
        nextMileStoneDate: {
          ...prevData.nextMileStoneDate,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    const validationResult = validateProjectData(formData);

    if (!validationResult.valid) {
      setErrors(validationResult.errors);
      return false;
    }

    setErrors({});
    return true;
  };

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    setFormData,
    setErrors,
  };
};
