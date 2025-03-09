import Logo from '@/public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LanguageSwitcher from '../ui/SwitchLang'

const Header = () => {
    const list = [
        { id: 1, title: "about us", href: "/about" },
        { id: 2, title: "register", href: "/register" },
        { id: 3, title: "sign in", href: "/sign-in" }
    ]
    return (
        <header className='px-[56px] bg-[#A5AAAD] border-b-[1px] border-black flex items-center justify-between'>
            <div className="flex items-center gap-[24px]">
                <Link href={'/'}>
                    <Image src={Logo} alt='logo' width={150} height={31} />
                </Link>
                <p className='text-[14px] leading-[20px] font-normal text-[#002532] uppercase'>travel with drive</p>
            </div>
            <div className='flex items-center'>
                <LanguageSwitcher />
                {list.map(item => (
                    <Link href={item.href} key={item.id} className='w-[185px] pr-[41px] pl-[48px] py-[20px] border-l-[1px] border-[#002532] text-white hover:text-[#002532] uppercase'>{item.title}</Link>
                ))}
            </div>
        </header>
    )
}

export default Header