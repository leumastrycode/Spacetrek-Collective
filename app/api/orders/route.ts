import supabase from "@/lib/db";

// 1. AMBIL SEMUA DATA ORDER
export async function GET() {
  const { data, error } = await supabase
    .from("order")
    .select(`
      *,
      users:user_id (
        email
      )
    `)
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json(data);
}

// 2. UBAH STATUS ORDER 
export async function PATCH(req: Request) {
  const { id, order_status } = await req.json();

  const { error } = await supabase
    .from("order")
    .update({ order_status })
    .eq("id", id);

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json({ success: true });
}

// 3. HAPUS DATA ORDER
export async function DELETE(req: Request) {
  const { id } = await req.json();

  const { error } = await supabase
    .from("order")
    .delete()
    .eq("id", id);

  if (error) return Response.json({ error }, { status: 500 });

  return Response.json({ success: true });
}