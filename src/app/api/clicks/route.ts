import { getLinksCollection } from "@/lib/mongodb";

export async function GET() {
  const collection = await getLinksCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.clickCount;
  }

  return Response.json({ counts });
}
