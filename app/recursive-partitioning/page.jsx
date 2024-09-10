import Panel from "@/components/Panel";
import { House } from "lucide-react";
import Link from "next/link";

export default function RecursivePartitioning() {
  return (
    <div className="h-screen relative">
      <Panel />

      <Link
        href={"/"}
        className="bg-black text-white rounded-full shadow-lg p-3 absolute left-5 bottom-5 cursor-pointer"
      >
        <House />
      </Link>
    </div>
  );
}
