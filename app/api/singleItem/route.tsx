import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
import ItemModal from "../../MongoModels/item";

export async function POST(request: Request, response: Response) {
  try {
    await dbConnect();
    const json = await request.json();
    const res = await ItemModal.findById(json);
    return NextResponse.json({
      status: 200,
      message: "Item data fetched successfully",
      data: res,
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: error ?? "Internal Server Error",
    });
  }
}
