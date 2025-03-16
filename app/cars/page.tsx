import { CalendarDays, CarFront, Map, Search } from 'lucide-react'
import React from 'react'
import Plashka from '../../public/plashka.png'
import Image from 'next/image'
import CarsLists from '@/service/getCars'

const Cars = () => {
    const menus = [
        { id: 1, title: "countries", icon: <Map size={24} /> },
        { id: 2, title: "cars", icon: <CarFront size={25} /> },
        { id: 3, title: "dates", icon: <CalendarDays size={25} /> },
        { id: 4, title: "search", icon: <Search size={23} /> }
    ]
    return (
        <div className='px-[50px]'>
            <div className='px-[190px] mb-[50px]'>
                <Image src={Plashka} alt="img" width={1180} height={110} priority style={{ marginBottom: "35px", height: "55px" }} />
                <h1 className='text-[95px] leading-[65px] text-[#F4472B] uppercase mb-[70px] text-center'>plan your journey</h1>
                <div className='flex items-center gap-[20px]'>
                    {menus.map(item => (
                        <button key={item.id} className="w-[280px] justify-center border border-gray-400 rounded-lg px-4 py-2 flex items-center gap-2 hover:border-black cursor-pointer">
                            <span className="font-bold">{item.title}</span>
                            <div>{item.icon}</div>
                        </button>
                    ))}
                </div>
            </div>
            <div><CarsLists /></div>
        </div>
    )
}

export default Cars