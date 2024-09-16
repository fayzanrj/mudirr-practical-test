"use client";
import handleApiError from "@/libs/HandleApiError";
import handleApiSuccess from "@/libs/HandleApiSuccess";
import ProjectProps from "@/props/ProjectProps";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Defining the shape of the context state
interface AppContextProps {
  projects: ProjectProps[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  addProject: (project: ProjectProps) => void;
  updateProject: (id: string, updatedProject: ProjectProps) => void;
  deleteProject: (id: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // States
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Function to add a project to list
  const addProject = async (project: ProjectProps) => {
    try {
      setIsLoading(true);
      const response = await axios.post("/api/createProject", project, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setProjects((prevProjects) => [...prevProjects, response.data.project]);
        handleApiSuccess("Project added successfully", toast);
      } else {
        console.error("Failed to add project");
      }
    } catch (error) {
      handleApiError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to update a project
  const updateProject = async (id: string, updatedProject: ProjectProps) => {
    try {
      setIsLoading(true);
      const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

      if (!accessToken) {
        console.error("Access token is not set");
        return;
      }

      const response = await axios.put(
        `/api/updateProject/${id}`,
        updatedProject,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setProjects((prevProjects) => {
          const projectIndex = prevProjects.findIndex(
            (project) => project._id === id
          );

          if (projectIndex === -1) {
            console.warn("Project not found:", id);
            return prevProjects;
          }

          return prevProjects.map((project, index) =>
            index === projectIndex
              ? { ...project, ...response.data.project }
              : project
          );
        });
        handleApiSuccess("Project updated successfully", toast);
      } else {
        console.error("Failed to update project");
      }
    } catch (error) {
      handleApiError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to delete a project
  const deleteProject = async (id: string) => {
    try {
      setIsLoading(true);
      const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

      if (!accessToken) {
        console.error("Access token is not set");
        return;
      }

      const response = await axios.delete(`/api/deleteProject/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 200) {
        setProjects((prevProjects) =>
          prevProjects.filter((project) => project._id !== id)
        );
        handleApiSuccess("Project deleted successfully", toast);
      } else {
        console.error("Failed to delete project");
      }
    } catch (error) {
      handleApiError(error, toast);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        projects,
        setProjects,
        addProject,
        updateProject,
        deleteProject,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

// Custom hook for using the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
