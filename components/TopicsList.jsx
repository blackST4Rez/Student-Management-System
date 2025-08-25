import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import {HiPencilAlt} from "react-icons/hi"

export default function TopicsList() {
  return (
    <>
    <div>
        <div>
            <h2>Student Name</h2>
            <div>Course</div>
        </div>

        <div>
            <RemoveBtn />
            <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
            </Link>
        </div>
    </div>
    </>
  );
}