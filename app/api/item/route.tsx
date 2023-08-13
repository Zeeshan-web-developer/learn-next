import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
import ItemModal from "../../MongoModels/item";

//store category
export async function POST(request: Request) {
  try {
    await dbConnect();
    const json = await request.json();
    const res = await ItemModal.create(json);
    return NextResponse.json({
      status: 200,
      message: "Item created successfully",
      data: res,
    });
  } catch (error: any) {
    if (error?.code === 11000) {
      return NextResponse.json({
        status: 400,
        message: "Item already exists",
      });
    }
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

// update item by id
export async function PUT(request: Request, response: Response) {
  try {
    await dbConnect();
    const json = await request.json();
    const existingItem = await ItemModal.findById(json._id);

    if (!existingItem) {
      return NextResponse.json({
        status: 400,
        message: "Item not found",
      });
    }

    // Update the item properties
    existingItem.name = json.name;
    existingItem.description = json.description;
    existingItem.category = json.category;
    existingItem.image = json.image;

    // Save the updated item
    const updatedItem = await existingItem.save();

    return NextResponse.json({
      status: 200,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {}
}
