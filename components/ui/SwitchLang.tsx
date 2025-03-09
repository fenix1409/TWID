"use client"
import { useState } from "react"

export default function LanguageSwitcher() {
    const [language, setLanguage] = useState("EN")

    return (
        <div className="w-[185px] pr-[41px] pl-[48px] py-[20px] flex items-center gap-2 text-lg font-medium">
            <button onClick={() => setLanguage("EN")} className={`cursor-pointer transition-colors ${language === "EN" ? "text-red-500" : "text-white"}`}>EN</button>
            <span className="text-white">/</span>
            <button onClick={() => setLanguage("O'Z")} className={`cursor-pointer transition-colors ${language === "O'Z" ? "text-red-500" : "text-white"}`}>O'Z</button>
        </div>
    )
}