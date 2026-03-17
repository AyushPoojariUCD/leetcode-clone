import Image from "next/image";
import { feedData } from "@/data/feedData";

export default function Feed() {
  return (
    <div className="space-y-6 bg-[#1a1a1a] p-4 rounded-xl">

      {/* Contest banner */}
      <div className="flex items-center gap-3 text-sm text-neutral-300">
        🏆
        <span>
          Join our next Contest
          <span className="text-blue-400 ml-1 cursor-pointer">
            Weekly Contest 494
          </span>
        </span>
      </div>

      {/* Feed posts */}
      <div className="divide-y divide-neutral-800">
        {feedData.map((post) => (
          <div key={post.id} className="flex gap-3 py-4">

            {/* Avatar */}
            <Image
              src={post.avatar}
              alt={post.user}
              width={36}
              height={36}
              className="rounded-full h-9 w-9"
            />

            {/* Post content */}
            <div className="flex-1">

              <div className="text-xs text-neutral-400 mb-1">
                {post.time}
              </div>

              <p className="text-sm">
                <span className="text-blue-400 cursor-pointer hover:underline">
                  {post.user}
                </span>{" "}
                posted{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">
                  {post.title}
                </span>
              </p>

              <p className="text-sm text-neutral-300 mt-1 line-clamp-2">
                {post.content}
              </p>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}