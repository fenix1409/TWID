import Link from 'next/link'
import React from 'react'

const Hero = () => {
    const menu = [
        { id: 1, title: "countries", href: "#" },
        { id: 2, title: "cars", href: "/cars" },
        { id: 3, title: "dates", href: "#" },
        { id: 4, title: "gifts", href: "#" },
        { id: 5, title: "Individual Tours", href: "#" },
        { id: 6, title: "Exclusive App", href: "#" }
    ]
    return (
        <section className='hero px-[30px] bg-[#A5AAAD]'>
            <div className='flex flex-col'>
                {menu.map(item => (
                    <Link key={item.id} href={item.href} className='text-[50px] leading-[50px] text-white font-normal uppercase border-b-[1px] border-white w-[640px]'>{item.title}</Link>
                ))}
            </div>
        </section>
    )
}

export default Hero