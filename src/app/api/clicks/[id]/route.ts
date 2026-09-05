import { getLinksCollection } from "@/lib/mongodb";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const collection = await getLinksCollection();

  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { clickCount: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, clickCount: result?.clickCount ?? 1 });
}
