import connectToDB from "@/libs/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectModel";
import validateProjectData from "@/libs/ValidateProjectData";
import validateAccessToken from "@/libs/ValidateAccessToken";
import {
  thorwNotFoundError,
  throwBadRequest,
  throwServerError,
  throwUnauthorisedError,
} from "@/libs/ServerErrors";

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const conneted = await connectToDB();
    if (!conneted) return throwServerError();

    // Extracting the access token from headers
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    // Validating access token
    if (!token || !(await validateAccessToken(token)))
      return throwUnauthorisedError();

    // Extracting the ID from params
    const { id } = params;

    // Validating
    if (id.length !== 24) return throwBadRequest("Invalid ID");

    // Parsing
    const updateData = await request.json();

    // Validating project data
    const validation = validateProjectData(updateData);

    if (!validation.valid)
      return throwBadRequest("Incomplete data. Please fill all the fields");

    // Updating the project
    const updatedProject = await Project.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    // Checking if updated
    if (!updatedProject) return thorwNotFoundError("Project not found");

    // Response
    return NextResponse.json(
      { msg: "Project updated successfully", project: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return throwServerError();
  }
};
