import { NextResponse } from "next/server";

export const throwServerError = () =>
  NextResponse.json({ message: "Internal Server Error" }, { status: 500 });

export const throwUnauthorisedError = () =>
  NextResponse.json({ message: "Unauthorized" }, { status: 401 });

export const throwBadRequest = (message: string = "Bad Request") =>
  NextResponse.json({ message }, { status: 400 });

export const thorwNotFoundError = (message: string = "Bad Request") =>
  NextResponse.json({ message }, { status: 404 });
