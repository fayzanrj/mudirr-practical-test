import connectToDB from "@/libs/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/ProjectModel";
import validateAccessToken from "@/libs/ValidateAccessToken";
import {
  thorwNotFoundError,
  throwBadRequest,
  throwServerError,
  throwUnauthorisedError,
} from "@/libs/ServerErrors";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const conneted = await connectToDB();
    if (!conneted) return throwServerError();

    // Extracting access token from headers
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    // Validating access token
    if (!token || !(await validateAccessToken(token)))
      return throwUnauthorisedError();

    // Extracting ID from params
    const { id } = params;

    // Validating
    if (id.length !== 24) return throwBadRequest("Invalid ID");

    // Deleting the project
    const deletedProject = await Project.findByIdAndDelete(id);

    // Checking if deleted
    if (!deletedProject) return thorwNotFoundError("Project not found");

    // Response
    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
};
