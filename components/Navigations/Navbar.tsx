"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Bell, Flame, Search} from "lucide-react";

const navLinks = [
  { name: "Explore", href: "/explore" },
  { name: "Problems", href: "/problems" },
  { name: "Contest", href: "/contest" },
  { name: "Discuss", href: "/discuss" },
  { name: "Interview", href: "/interview" },
  { name: "Store", href: "/store" },
];

export default function Navbar(){
    const pathname = usePathname()

    const [open,setOpen] = useState(false)

    return (
        
    <header className="w-full border-b border-neutral-800 bg-[#1a1a1a]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">

        {/* LEFT */}
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/leetcode-light.svg"
              alt="logo"
              width={110}
              height={36}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`transition hover:text-white ${
        link.name === "Store"
          ? "text-[#ffa116] hover:text-[#ffa116]"
          : pathname === link.href
          ? "text-white border-b border-yellow-500 pb-1"
          : ""
      }`}
    >
      {link.name}
    </Link>
  ))}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* Search */}
<div className="relative hidden lg:block">
  <Search
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
  />

  <input
    type="text"
    placeholder="Search"
    className="
      h-9 w-[240px]
      rounded-full
      bg-[#2b2b2b]
      pl-9 pr-4
      text-sm
      text-gray-200
      placeholder:text-gray-400
      outline-none
      transition-colors
      focus:bg-[#333]
    "
  />
</div>

          {/* Notification */}
          <Bell className="h-5 w-5 text-neutral-300 cursor-pointer hover:text-white" />

          {/* Streak */}
          <div className="flex items-center gap-1 text-orange-400 font-medium">
            <Flame size={18} />
            <span>19</span>
          </div>

          {/* Avatar */}
          <Image
            src="/avatars/avatar.png"
            alt="avatar"
            width={28}
            height={28}
            className="rounded-full cursor-pointer"
          />

          {/* Premium */}
          <button className=" hidden h-8 w-[84px] cursor-pointer rounded-[8px] bg-[#ffa1161f]
              text-center leading-8 text-[#ffa116] transition-colors hover:bg-[#ffa11633] lg:inline-block
              font-[TypoRound,sans-serif] font">
            Premium
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-[#1a1a1a] px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-4 text-neutral-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    ) 
}