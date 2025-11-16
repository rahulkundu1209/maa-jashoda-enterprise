import { createClient } from '@supabase/supabase-js';
import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = 'https://fnvpcaipuukyuzglihol.supabase.co'
  const supabaseKey = process.env.SUPABASE_KEY
  if (!supabaseKey) {
    return NextResponse.json({ error: "SUPABASE_KEY is not set" }, { status: 500 })
  }
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
