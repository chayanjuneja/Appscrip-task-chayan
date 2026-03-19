'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, InstagramIcon, LinkedInIcon, FacebookIcon } from './Icons'

const LINKS: Record<string, string[]> = {
  'METTA MUSE': ['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliances Docs'],
  'QUICK LINKS': ['Orders & Shipping', 'Join/Login as a Seller', 'Payment & Pricing', 'Return & Refunds', 'FAQs', 'Privacy Policy', 'Terms & Conditions'],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const toggle = (s: string) => setOpen(p => ({ ...p, [s]: !p[s] }))

  return (
    <footer className="bg-[#1a1a1a] text-white mt-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-6 md:px-12 py-8 border-b border-white/10">
        <div className="flex-1">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase mb-1">BE THE FIRST TO KNOW</h2>
          <p className="text-xs text-white/60 mb-4">Sign up for updates from metta muse.</p>
          <div className="flex">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your e-mail..." className="flex-1 bg-transparent border border-white/40 px-4 py-2.5 text-xs text-white placeholder-white/40 outline-none focus:border-white/80 min-w-0" aria-label="Email for newsletter" />
            <button type="button" className="bg-white text-[#1a1a1a] px-6 py-2.5 text-xs font-semibold tracking-widest uppercase hover:bg-white/90 flex-shrink-0">SUBSCRIBE</button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <p className="text-xs text-white/60 mb-2 uppercase tracking-wider">Currency &amp; Language</p>
          <div className="flex gap-3">
            <button type="button" className="flex items-center gap-1.5 text-xs text-white border border-white/40 px-3 py-1.5">USD <ChevronDownIcon /></button>
            <button type="button" className="flex items-center gap-1.5 text-xs text-white border border-white/40 px-3 py-1.5">ENG <ChevronDownIcon /></button>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
        {Object.entries(LINKS).map(([title, links]) => (
          <div key={title} className="border-b border-white/10 md:border-none">
            <button type="button" className="md:hidden flex items-center justify-between w-full py-4 text-xs font-bold tracking-[0.15em] uppercase" onClick={() => toggle(title)}>
              {title} {open[title] ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <h2 className="hidden md:block text-xs font-bold tracking-[0.15em] uppercase mb-4">{title}</h2>
            <ul className={`space-y-2.5 pb-4 md:pb-0 ${!open[title] ? 'hidden md:block' : 'block'}`}>
              {links.map(link => <li key={link}><a href="/" className="text-xs text-white/60 hover:text-white tracking-wide">{link}</a></li>)}
            </ul>
          </div>
        ))}
        <div className="border-b border-white/10 md:border-none">
          <button type="button" className="md:hidden flex items-center justify-between w-full py-4 text-xs font-bold tracking-[0.15em] uppercase" onClick={() => toggle('FOLLOW US')}>
            FOLLOW US {open['FOLLOW US'] ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          <h2 className="hidden md:block text-xs font-bold tracking-[0.15em] uppercase mb-4">FOLLOW US</h2>
          <div className={`flex gap-3 pb-4 md:pb-0 ${!open['FOLLOW US'] ? 'hidden md:flex' : 'flex'}`}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-white"><InstagramIcon /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-white"><LinkedInIcon /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/60 hover:text-white"><FacebookIcon /></a>
          </div>
        </div>
        <div className="border-b border-white/10 md:border-none">
          <button type="button" className="md:hidden flex items-center justify-between w-full py-4 text-xs font-bold tracking-[0.15em] uppercase" onClick={() => toggle('PAYMENTS')}>
            ACCEPT PAYMENTS {open['PAYMENTS'] ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          <h2 className="hidden md:block text-xs font-bold tracking-[0.15em] uppercase mb-4">ACCEPT PAYMENTS</h2>
          <div className={`flex flex-wrap gap-2 pb-4 md:pb-0 ${!open['PAYMENTS'] ? 'hidden md:flex' : 'flex'}`}>
            {['VISA', 'Mastercard', 'PayPal', 'Amex', 'GPay'].map(m => (
              <span key={m} className="text-xs font-semibold px-2.5 py-1 border border-white/30 text-white/80">{m}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 md:px-12 py-4">
        <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Appscrip Store. All rights reserved , made by chayan.</p>
      </div>
    </footer>
  )
}