"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to delete this student?");
    
    if (confirmed) {
      try {
        const res = await fetch(`/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        } else {
          throw new Error("Failed to delete student");
        }
      } catch (error) {
        console.log("Error deleting student:", error);
      }
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400 hover:text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}
