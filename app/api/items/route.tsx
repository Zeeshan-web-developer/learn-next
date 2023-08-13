import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
import ItemModal from "../../MongoModels/item";

// get all items from db
export async function GET() {
  try {
    await dbConnect();
    const res = await ItemModal.find();
    return NextResponse.json({
      status: 200,
      message: "Item fetched successfully",
      data: res,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
