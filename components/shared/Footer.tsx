"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t-4 border-dashed border-yellow-400 py-6 md:py-0 bg-yellow-100">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Goose Touch Rugby Logo" width={40} height={40} className="h-10 w-auto" />
          <p className="text-sm font-bold text-black">© 2025 Goose Touch Rugby. All rights reserved.</p>
        </div>
        <Link
          href="https://www.wanaqim.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-black hover:underline underline-offset-4"
        >
          Built and managed by Wan Aqim ©
        </Link>
      </div>
    </footer>
  )
} 