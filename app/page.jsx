import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-5">
        <Link
          href={"/recursive-partitioning"}
          className="bg-teal-600 text-white px-4 py-2 rounded-md text-center font-medium shadow-md"
        >
          Recursive Partitioning
        </Link>
        <Link
          href={"/alphabet-tile"}
          className="bg-rose-500 text-white px-4 py-2 rounded-md text-center font-medium shadow-md"
        >
          Alphabet Tile Interaction
        </Link>
      </div>
    </div>
  );
}
