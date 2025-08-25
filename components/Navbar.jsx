import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link href={"/"}>Student Management System</Link>
      <Link href={"/addTopic"}>Add Student</Link>
    </nav>
  );
}