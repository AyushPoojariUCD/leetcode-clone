import Feed from "@/components/Home/Feed";
import Sidebar from "@/components/Home/Sidebar";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 bg-[#ffffff13]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">

        {/* LEFT FEED */}
        <Feed />

        {/* RIGHT SIDEBAR */}
        <Sidebar />

      </div>
    </main>
  );
}
