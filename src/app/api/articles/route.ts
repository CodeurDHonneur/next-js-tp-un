import articles from "@/data/artilces.json";
import { NextResponse } from "next/server";


export async function GET(){
   return NextResponse.json(articles);
} 