import Topic from "@/models/Topic";
import connectMongoDB from "@libs/mongodb";
import { NextResponse } from "next/server";

export async function PUT(request, { params }){
    const {id} = params;
    const {newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Topic Updated"}, {status: 200});
}
