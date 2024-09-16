import connectToDB from "@/libs/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectModel";
import validateProjectData from "@/libs/ValidateProjectData";
import ProjectProps from "@/props/ProjectProps";
import validateAccessToken from "@/libs/ValidateAccessToken";
import {
  throwBadRequest,
  throwServerError,
  throwUnauthorisedError,
} from "@/libs/ServerErrors";

export const POST = async (request: NextRequest) => {
  try {
    const conneted = await connectToDB();
    if (!conneted) return throwServerError();

    // Extracting access token from headers
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    // Validating the access token
    if (!token || !(await validateAccessToken(token)))
      return throwUnauthorisedError();

    // Parsing
    const body: ProjectProps = await request.json();

    // Validating project data
    const validation = validateProjectData(body);

    if (!validation.valid)
      return throwBadRequest("Incomplete data. Please fill all the fields");

    // Creating project
    const newProject = new Project({
      title: body.title,
      nextMileStoneDate: body.nextMileStoneDate,
      latestCompletedStep: body.latestCompletedStep,
      type: body.type,
      status: body.status,
    });

    await newProject.save();

    // Response
    return NextResponse.json(
      { message: "Project created successfully", project: newProject },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating project:", error);
    return throwServerError();
  }
};
