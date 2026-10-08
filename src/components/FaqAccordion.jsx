'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="divide-y divide-navy-700 border-t border-b border-navy-700">
      {items.map(({ q, a }, i) => {
        const isOpen = openIndex === i
        return (
          <div key={q}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-white font-semibold">{q}</span>
              <ChevronDown
                size={18}
                className={`text-gold-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <p className="text-gray-400 text-sm leading-relaxed pb-5 pr-8">{a}</p>
            )}
          </div>
        )
      })}
    </div>
  )
}
