"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  // Use ChevronLeft for mobile menu on all pages except home
  const MobileChevron = pathname === "/" ? ChevronRight : ChevronLeft

  return (
    <header className="sticky top-0 z-40 w-full border-b-4 border-dashed border-yellow-400 bg-white shadow-md">
      <div className="container flex h-20 items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Goose Touch Rugby Logo" width={60} height={50} className="h-14 w-auto" />
              <span className="font-genty text-2xl text-black">Goose Touch Rugby</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#about"
            className={`text-md rounded-full px-3 py-1 font-medium text-black ${
              isActive("/#about") ? "bg-yellow-200" : "hover:bg-yellow-200"
            } transition-colors`}
          >
            About
          </Link>
          <Link
            href="/team"
            className={`text-md rounded-full px-3 py-1 font-medium text-black ${
              isActive("/team") ? "bg-yellow-200" : "hover:bg-yellow-200"
            } transition-colors`}
          >
            Team
          </Link>
          <Link
            href="/fixtures"
            className={`text-md rounded-full px-3 py-1 font-medium text-black ${
              isActive("/fixtures") ? "bg-yellow-200" : "hover:bg-yellow-200"
            } transition-colors`}
          >
            Fixtures
          </Link>
          <Link
            href="/news"
            className={`text-md rounded-full px-3 py-1 font-medium text-black ${
              isActive("/news") ? "bg-yellow-200" : "hover:bg-yellow-200"
            } transition-colors`}
          >
            News
          </Link>
          <Link
            href="/#contact"
            className={`text-md rounded-full px-3 py-1 font-medium text-black ${
              isActive("/#contact") ? "bg-yellow-200" : "hover:bg-yellow-200"
            } transition-colors`}
          >
            Contact
          </Link>
          <Link href="/join">
            <Button className="rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black">
              Join Us
            </Button>
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-black/20" onClick={toggleMobileMenu}></div>
          <div className="fixed top-20 right-0 z-50 h-[calc(100vh-5rem)] w-3/4 max-w-sm bg-white border-l-4 border-dashed border-yellow-400 p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-l-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col space-y-6">
              <Link
                href="/#about"
                className={`flex items-center justify-between rounded-xl border-2 border-black ${
                  isActive("/#about") ? "bg-yellow-200" : "bg-yellow-100 hover:bg-yellow-200"
                } px-4 py-3 font-medium text-black transition-colors`}
                onClick={toggleMobileMenu}
              >
                About
                <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-black">
                  <MobileChevron className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/team"
                className={`flex items-center justify-between rounded-xl border-2 border-black ${
                  isActive("/team") ? "bg-yellow-200" : "bg-yellow-100 hover:bg-yellow-200"
                } px-4 py-3 font-medium text-black transition-colors`}
                onClick={toggleMobileMenu}
              >
                Team
                <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-black">
                  <MobileChevron className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/fixtures"
                className={`flex items-center justify-between rounded-xl border-2 border-black ${
                  isActive("/fixtures") ? "bg-yellow-200" : "bg-yellow-100 hover:bg-yellow-200"
                } px-4 py-3 font-medium text-black transition-colors`}
                onClick={toggleMobileMenu}
              >
                Fixtures
                <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-black">
                  <MobileChevron className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/news"
                className={`flex items-center justify-between rounded-xl border-2 border-black ${
                  isActive("/news") ? "bg-yellow-200" : "bg-yellow-100 hover:bg-yellow-200"
                } px-4 py-3 font-medium text-black transition-colors`}
                onClick={toggleMobileMenu}
              >
                News
                <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-black">
                  <MobileChevron className="h-5 w-5" />
                </div>
              </Link>
              <Link
                href="/#contact"
                className={`flex items-center justify-between rounded-xl border-2 border-black ${
                  isActive("/#contact") ? "bg-yellow-200" : "bg-yellow-100 hover:bg-yellow-200"
                } px-4 py-3 font-medium text-black transition-colors`}
                onClick={toggleMobileMenu}
              >
                Contact
                <div className="h-8 w-8 rounded-full bg-yellow-300 flex items-center justify-center border-2 border-black">
                  <MobileChevron className="h-5 w-5" />
                </div>
              </Link>
              <Link href="/join" onClick={toggleMobileMenu}>
                <Button className="mt-4 w-full rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transform transition-transform hover:-translate-y-1">
                  Join Us
                </Button>
              </Link>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <Image src="/cartoon-goose1.svg" alt="Cartoon Goose" width={80} height={80} className="opacity-70" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
