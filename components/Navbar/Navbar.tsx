'use client'

import Container from "@/components/Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return <header className="fixed w-full bg-white z-10 shadow-sm">
    <div className="py-4 border-b-[1px]">
      <Container>
        <nav className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu />
        </nav>
      </Container>
    </div>
  </header>
}

export default Navbar
