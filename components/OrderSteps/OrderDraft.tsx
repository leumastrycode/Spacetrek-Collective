'use client'

import Line from "@/assets-svgr/Initiate-Line.svg";
import { useState } from "react"

interface FormDataProps {
  purpose: string
  field: string
  style: string
  color: string
  impression: string
}

interface ReviewDraftProps {
  data: FormDataProps
  onTransmit: () => void
  onUpdateData: (updatedData: Partial<FormDataProps>) => void // Untuk fitur edit langsung
}

export default function ReviewDraft({ data, onTransmit, onUpdateData }: ReviewDraftProps) {
  // State untuk mengontrol field mana yang sedang diedit
  const [editingField, setEditingField] = useState<string | null>(null)
  const [tempValue, setTempValue] = useState("")

  const startEditing = (key: keyof FormDataProps, value: string) => {
    setEditingField(key)
    setTempValue(value)
  }

  const saveEditing = (key: keyof FormDataProps) => {
    onUpdateData({ [key]: tempValue })
    setEditingField(null)
  }

  // Helper untuk mengubah nama key menjadi label ala terminal cyberpunk
  const getLabel = (key: string) => {
    return `CONF_${key.toUpperCase()}`
  }

  return (
    <div className="w-full max-w-[600px] md:max-w-[1000px] flex flex-col items-start justify-center gap-6 mx-4 md:mx-[60px] mb-[80px]">
   

      {/* Form */}
      <div className="glass-effect-no-hover justify-center text-black rounded-[10px] max-w-[600px] md:max-w-[1000px] w-full shadow-2xl relative p-6 sm:p-10 md:p-[90px]">
        {/* Title */}
        <div className="self-stretch h-12 justify-center relative">
          <span className="text-indigo-600 text-[18px] sm:text-[24px] md:text-[40px] font-normal font-['Roboto'] leading-none">
            Initiate
          </span>
          <span className="text-slate-200/90 text-[18px] sm:text-[24px] md:text-[40px] font-normal font-['Roboto'] leading-none">
            {" "}
            Project
          </span>
            <Line className="absolute -bottom-[20px] left-[128px] w-full" />
        </div>   

        {/* Question */}
        <p className="stretch justify-center text-white/50 text-[16px] sm:text-[16px] md:text-[18px] italic leading-normal mt-[50px]">
          This message will be compiled and sent to our team&apos;s email.
        </p>

        {/* Grid Data Konfigurasi */}
      <div className="space-y-4 mb-8 mt-[10px]">
        {(Object.keys(data) as Array<keyof FormDataProps>).map((key) => (
          <div 
            key={key} 
            className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-neutral-950/60 border border-neutral-900 rounded-lg group hover:border-neutral-800 transition-colors duration-200"
          >
            {/* Bagian Label dan Value */}
            <div className="flex-1 pr-4">
              <span className="text-[10px] font-mono text-neutral-500 block mb-1 tracking-wider">
                {getLabel(key)}
              </span>
              
              {editingField === key ? (
                <input
                  type="text"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="w-full bg-neutral-900 border border-cyan-500/50 rounded px-2 py-1 text-sm text-neutral-200 focus:outline-none focus:border-cyan-400 font-mono"
                  autoFocus
                />
              ) : (
                <p className="text-sm text-neutral-200 font-medium capitalize">
                  {data[key] || <span className="text-neutral-600 italic">Not specified</span>}
                </p>
              )}
            </div>

            {/* Tombol Aksi Edit / Save */}
            <div className="mt-2 sm:mt-0 flex justify-end">
              {editingField === key ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEditing(key)}
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-mono uppercase bg-cyan-950/30 px-3 py-1.5 rounded border border-cyan-800/50"
                  >
                    SAVE
                  </button>
                  <button
                    onClick={() => setEditingField(null)}
                    className="text-xs text-neutral-500 hover:text-neutral-400 font-mono uppercase px-2 py-1.5"
                  >
                    CANCEL
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => startEditing(key, data[key])}
                  className="text-xs text-neutral-500 hover:text-cyan-400 font-mono uppercase opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  [ EDIT_DATA ]
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Utama Transmit */}
      <div className="pt-4 border-t border-neutral-800 flex flex-col items-center">
        <button
          onClick={onTransmit}
          className="w-full bg-indigo-600 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform active:scale-[0.99]"
        >
          Initialize Order
        </button>
        <span className="text-[10px] text-neutral-500 font-mono mt-3 uppercase tracking-wider">
          Submitting project blueprint to our team
        </span>
      </div>
    </div>
  </div>
  )}