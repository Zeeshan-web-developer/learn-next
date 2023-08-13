import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
import CategoryModal from "../../MongoModels/Category";

//store category
export async function POST(request: Request) {
  try {
    await dbConnect();
    const json = await request.json();
    const res = await CategoryModal.create(json);
    return NextResponse.json({
      status: 200,
      message: "Category created successfully",
      data: res,
    });
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json({
        status: 400,
        message: "Category already exists",
      });
    }
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
      data: error,
    });
  }
}
