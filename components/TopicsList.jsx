import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/topics', {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    const data = await res.json();
    return data.topics || [];
  } catch (error) {
    console.log("Error fetching topics:", error);
    return [];
  }
};

export default async function TopicsList() {
  const topics = await getTopics();
  
  return (
    <>
      {topics.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No students found. Add your first student!</p>
        </div>
      ) : (
        topics.map((t) => (
          <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
}
