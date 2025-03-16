"use client"
import { instance } from '@/hook/instance'
import { CarType } from '@/types/CarType'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'

const CarsLists = () => {
    const { data: cars = [] } = useQuery({
        queryKey: ['cars'],
        queryFn: () => instance().get('/cars').then((res) => res.data)
    })
    console.log(cars.image);

    return (
        <div className='flex items-center gap-[30px] flex-wrap justify-center'>
            {cars.map((item: CarType) => (
                <div key={item.id} className="w-[590px] h-[600px] bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-900">{item.name}</h1>
                    <p className="text-gray-700 mt-2">{item.description}</p>
                    <div className="mt-4 flex justify-center">
                        <Image src={item.image} alt="image" className="w-full rounded-lg" unoptimized width={440} height={145} style={{width: "285px", height: "107px"}}/>
                    </div>
                    <div className="mt-6 text-gray-800">
                        <p className="flex justify-between">
                            <span className="font-semibold">Fuel Type</span> <span>{item.FuelType}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">No. of Cylinder</span> <span>{item.Cylinder}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Max Power (bhp@rpm)</span>{" "}
                            <span>{item.Hp} hp</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Torque (mn)</span>{" "}
                            <span>{item.Torque} mn</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Seating Capacity</span>{" "}
                            <span>2, 4</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Transmission Type</span>{" "}
                            <span>{item.Transmission}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Tank Capacity</span> <span>64.0</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Body Type</span> <span>{item.type}</span>
                        </p>
                    </div>
                    <div className="mt-4 border-t-4 border-red-500"></div>
                </div>
            ))}
        </div>
    )
}

export default CarsLists