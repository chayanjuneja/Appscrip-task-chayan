'use client'

import { useState, useCallback } from 'react'
import { ChevronDownIcon, ChevronUpIcon, CloseIcon } from './Icons'

const SECTIONS = ['IDEAL FOR', 'OCCASION', 'WORK', 'FABRIC', 'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN']

interface Props {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (cat: string) => void
  customizable: boolean
  onCustomizableChange: (v: boolean) => void
  isDrawer?: boolean
  onClose?: () => void
}

export default function FilterSidebar({ categories, selectedCategory, onCategoryChange, customizable, onCustomizableChange, isDrawer, onClose }: Props) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const toggle = useCallback((s: string) => setOpenSections(p => ({ ...p, [s]: !p[s] })), [])

  return (
    <aside className={isDrawer ? 'fixed inset-0 z-50 bg-white overflow-y-auto' : 'w-56 flex-shrink-0'} aria-label="Product filters">
      {isDrawer && (
        <div className="flex items-center justify-between px-4 py-4 border-b border-[#e8e8e8]">
          <span className="text-sm font-semibold tracking-wider uppercase">Filters</span>
          <button type="button" onClick={onClose} aria-label="Close filters"><CloseIcon /></button>
        </div>
      )}
      <div className="px-4 pt-4 pb-2">
        <label className="flex items-center gap-2.5 cursor-pointer mb-4">
          <input type="checkbox" checked={customizable} onChange={e => onCustomizableChange(e.target.checked)} className="w-4 h-4 cursor-pointer" />
          <span className="text-xs font-semibold tracking-wider uppercase">CUSTOMIZABLE</span>
        </label>
        <div className="border-t border-[#e8e8e8] py-3">
          <h2 className="text-xs font-semibold tracking-wider uppercase mb-2">CATEGORY</h2>
          <ul className="space-y-1">
            {['all', ...categories].map(cat => (
              <li key={cat}>
                <button type="button" onClick={() => onCategoryChange(cat)} className={`text-xs tracking-wide capitalize w-full text-left py-1 transition-colors ${selectedCategory === cat ? 'font-semibold text-[#1a1a1a]' : 'text-[#888] hover:text-[#1a1a1a]'}`}>
                  {cat === 'all' ? 'ALL' : cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {SECTIONS.map(section => (
          <div key={section} className="filter-accordion-item">
            <button type="button" onClick={() => toggle(section)} className="flex items-center justify-between w-full py-1" aria-expanded={!!openSections[section]}>
              <span className="text-xs font-semibold tracking-wider uppercase">{section}</span>
              {openSections[section] ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <p className="text-xs text-[#888] mt-0.5">{openSections[section] ? '' : 'All'}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}