import Image from "next/image";

export default function Sidebar() {
  const topics = [
    { name: "Pick One", icon: "pick-one" },
    { name: "Algorithms", icon: "algorithms" },
    { name: "Database", icon: "databases" },
    { name: "Shell", icon: "shell" },
    { name: "Concurrency", icon: "concurrency" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Pandas", icon: "pandas" },
  ];

  return (
    <aside className="space-y-5 bg-[#262626] rounded-2xl">

      {/* Interview Course Banner */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-3">
        <Image
          src="/images/leetcode-interview-course-banner.png"
          alt="Interview Crash Course"
          width={300}
          height={160}
          className="rounded-lg w-full"
        />
      </div>

      {/* Contest Card */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">LeetCode Contest</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Participate and win prizes.
          </p>

          <button className="mt-3 text-[#eff1f6bf] bg-[#ffffff1a] px-3 py-1 rounded text-sm hover:bg-neutral-600">
            Join Contest
          </button>
        </div>

        <Image
          src="/images/leetcode-trophy.png"
          alt="Contest Trophy"
          width={80}
          height={80}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff1a]" />

      {/* Discuss Card */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-4 flex items-center gap-4">
        <Image
          src="/images/leetcode-discuss.png"
          alt="Discuss"
          width={70}
          height={70}
        />

        <div>
          <h3 className="text-white font-medium">Discuss Now</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Share interview questions.
          </p>

          <button className="mt-2 text-[#eff1f6bf] bg-neutral-700 px-3 py-1 rounded text-sm hover:bg-neutral-600">
            Let's Discuss
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff1a]" />

      {/* Shop with LeetCoins */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-4 flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">Shop with LeetCoins</h3>

          <p className="text-sm text-neutral-400 mt-1">
            Use your points in our LeetCode Store.
          </p>

          <button className="mt-3 text-[#eff1f6bf] bg-neutral-700 px-3 py-1 rounded text-sm hover:bg-neutral-600">
            Redeem
          </button>
        </div>

        <Image
          src="/images/leetcode-coin.png"
          alt="LeetCoins"
          width={80}
          height={80}
        />
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff1a]" />

      {/* Design */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-1 flex items-center justify-between">
        <ul className="space-y-3 text-sm text-neutral-400">
          <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              
            <Image
              className="bg-[#ffffff1a] rounded-2xl"
              src={`/tags/design-system.svg`}
              alt="design-system"
              width={18}
              height={18}
            />
            OO Design
            </li>

            <li className="flex items-center gap-2 hover:text-white cursor-pointer">
              
            <Image
              className="bg-[#ffffff1a] rounded-2xl"
              src={`/tags/design-system.svg`}
              alt="design-system"
              width={18}
              height={18}
            />
            Operating Systems
            </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffffff1a]" />


      {/* Topics */}
      <div className="rounded-xl bg-[#262626] border border-neutral-800 p-1">

        <ul className="space-y-3 text-sm text-neutral-400">
  {topics.map((topic) => (
    <li
      key={topic.name}
      className="flex items-center gap-2 hover:text-white cursor-pointer"
    >
      <Image
        className="bg-[#ffffff1a] rounded-2xl"
        src={`/tags/${topic.icon}.svg`}
        alt={topic.name}
        width={18}
        height={18}
      />
      {topic.name}
    </li>
  ))}
        </ul>

      </div>

    </aside>
  );
}