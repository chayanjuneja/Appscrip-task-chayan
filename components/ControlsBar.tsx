'use client'

import { useState } from 'react'
import { ChevronDownIcon } from './Icons'

type SortOption = 'RECOMMENDED' | 'NEWEST FIRST' | 'POPULAR' | 'PRICE: HIGH TO LOW' | 'PRICE: LOW TO HIGH'

interface Props {
  itemCount: number
  showFilter: boolean
  onToggleFilter: () => void
  sortBy: SortOption
  onSortChange: (s: SortOption) => void
}

export default function ControlsBar({ itemCount, showFilter, onToggleFilter, sortBy, onSortChange }: Props) {
  const [sortOpen, setSortOpen] = useState(false)
  const sortOptions: SortOption[] = ['RECOMMENDED', 'NEWEST FIRST', 'POPULAR', 'PRICE: HIGH TO LOW', 'PRICE: LOW TO HIGH']

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-3 border-t border-b border-[#e8e8e8]">
      <div className="flex items-center gap-4">
        <span className="text-xs font-semibold tracking-wider">{itemCount.toLocaleString()} ITEMS</span>
        <button type="button" onClick={onToggleFilter} className="hidden md:flex items-center gap-1.5 text-xs font-medium tracking-wider underline underline-offset-2 hover:text-[#888] transition-colors">
          {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
        </button>
      </div>
      <div className="relative">
        <button type="button" onClick={() => setSortOpen(v => !v)} className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase hover:text-[#888] transition-colors" aria-haspopup="listbox" aria-expanded={sortOpen}>
          {sortBy} <ChevronDownIcon />
        </button>
        {sortOpen && (
          <ul className="absolute right-0 top-full mt-1 w-52 bg-white border border-[#e8e8e8] shadow-md z-30">
            {sortOptions.map(opt => (
              <li key={opt}>
                <button type="button" onClick={() => { onSortChange(opt); setSortOpen(false) }} className={`w-full text-left px-4 py-2.5 text-xs tracking-wider uppercase hover:bg-gray-50 transition-colors ${sortBy === opt ? 'font-semibold' : 'font-normal'}`}>
                  {opt}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}