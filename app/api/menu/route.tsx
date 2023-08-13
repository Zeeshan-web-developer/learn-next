import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
// import MenuModal from "../../MongoModels/menuModel";
// import CategoryModal from "../menu/Category";

// export async function GET() {
//   await dbConnect();
//   let res = await MenuModal.find();
//   console.log(res);
//   return NextResponse.json(res);
// }

// export async function POST(request: Request) {
//   await dbConnect();
//   const json = await request.json();
//   const res = await MenuModal.create(json);
//   console.log(res, json);
//   return NextResponse.json(res);
// }

export async function POST(request: Request) {
  await dbConnect();
  // const json = await request.json();
  // console.log({ json });
  // const res = await MenuModal.create(json);
  // console.log(res, json);
  // return NextResponse.json(res);
}
