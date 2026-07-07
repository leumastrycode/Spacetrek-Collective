import supabase from "@/lib/db";

export async function GET() {
  const { data } = await supabase
    .from("users")
    .select("*");

  return Response.json(data);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  const { error } = await supabase
    .from("users")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Delete error:", error);
    return Response.json({ error }, { status: 500 });
  }
  return Response.json({ success: true });
}