import connectToDB from "@/libs/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectModel";
import validateAccessToken from "@/libs/ValidateAccessToken";
import { throwServerError, throwUnauthorisedError } from "@/libs/ServerErrors";

export const GET = async (request: NextRequest) => {
  try {
    const conneted = await connectToDB();
    if (!conneted) return throwServerError();

    // Extracting the access token from headers
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    // Validating access token
    if (!token || !(await validateAccessToken(token)))
      return throwUnauthorisedError();

    // Finding projects
    const projects = await Project.find();

    // Response
    return NextResponse.json(
      {
        projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);
    return throwServerError();
  }
};
