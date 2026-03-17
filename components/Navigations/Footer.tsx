import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Help Center", href: "/help" },
    { name: "Jobs", href: "/jobs" },
    { name: "Bug Bounty", href: "/bug-bounty" },
    { name: "Assessment", href: "/assessment" },
    { name: "Students", href: "/students" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="border-t border-neutral-800 bg-[#1a1a1a] text-sm text-neutral-400">
      <div className="mx-auto max-w-7xl px-4 py-6">

        {/* Desktop / Tablet Layout */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

          {/* Left Section */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="text-neutral-500">
              Copyright © 2026 LeetCode
            </span>

            <span className="hidden md:inline text-neutral-600">|</span>

            {links.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>

                {index !== links.length - 1 && (
                  <span className="mx-2 text-neutral-600 hidden md:inline">
                    |
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 cursor-pointer hover:text-white transition">
            <Image
              src="/icons/us-flag.svg"
              alt="United States"
              width={18}
              height={18}
            />
            <span>United States</span>
          </div>

        </div>
      </div>
    </footer>
  );
}