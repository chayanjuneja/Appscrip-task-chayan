'use client'

import { HamburgerIcon, SearchIcon, HeartIcon, BagIcon, UserIcon, ChevronDownIcon } from './Icons'

export default function Header({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="flex items-center justify-between px-4 md:px-8 h-14 md:h-16">
        <button type="button" onClick={onMenuToggle} aria-label="Open navigation menu" className="text-[#1a1a1a]">
          <HamburgerIcon />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="/" aria-label="Appscrip Store home">
            <span className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase">LOGO</span>
          </a>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <button type="button" aria-label="Search" className="hover:text-[#888] transition-colors"><SearchIcon /></button>
          <button type="button" aria-label="Wishlist" className="hover:text-[#888] transition-colors hidden sm:block"><HeartIcon /></button>
          <button type="button" aria-label="Shopping bag" className="hover:text-[#888] transition-colors"><BagIcon /></button>
          <button type="button" aria-label="Account" className="hover:text-[#888] transition-colors"><UserIcon /></button>
          <button type="button" className="hidden md:flex items-center gap-1 text-xs font-medium tracking-wider uppercase hover:text-[#888] transition-colors">
            ENG <ChevronDownIcon />
          </button>
        </div>
      </div>
      <nav aria-label="Main navigation" className="hidden md:flex items-center justify-center gap-8 px-8 h-10 border-t border-[#e8e8e8]">
        {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((item) => (
          <a key={item} href="/" className="nav-link">{item}</a>
        ))}
      </nav>
    </header>
  )
}