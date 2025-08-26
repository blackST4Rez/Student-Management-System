"use client";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();

    if(!title || !description){
      alert("Title and description are required.");
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
      onChange={(e)=> setTitle(e.target.value)}
      value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Student Name"
      />

       <input
        onChange={(e)=> setDescription(e.target.value)}
      value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Course"
      />
      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Student
      </button>
    </form>
  );
}