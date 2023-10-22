import Link from 'next/link'
import React from 'react'
import { promises as fs } from 'fs'
import { error } from 'console'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface type_breed {
    breed: string,
    country: string,
    origin: string,
    coat: string,
    pattern: string
}

async function getLocalData() {
    const file = await fs.readFile('public/json/cat.json', 'utf8');
    return file
}

async function getData() {
    // const res = await fetch('https://catfact.ninja/breeds')
    const res = await fetch('https://melivecode.com/api/attractions')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export default async function Page() {
    // const data = await getData()
    const file = await getLocalData()
    const data = JSON.parse(file)

    // console.log(data)

    return (
        <div>
            <h1 className='flex justify-center'>Cat Breeds</h1>
            <div className='flex justify-center'>

                <div className='grid grid-cols-4 gap-4 items-start '>
                    {data.map((cat: type_breed, index: number) => (
                        // <div key={cat.breed}> {cat.breed} </div>
                        <Card key={cat.breed} className='w-[200px] rounded shadow-lg' >
                            <CardHeader >
                                <CardTitle>{cat.breed}.{index}</CardTitle>
                                <CardDescription className='flex justify-center'><Image src="data:image/png;base64,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" width={50} height={50} alt={cat.breed} className='rounded-full'></Image></CardDescription>
                            </CardHeader>
                            <CardContent className='text-sm'>
                                <p>Country : {cat.country}</p>
                                <p>Origin : {cat.origin} </p>
                            </CardContent>
                            <CardFooter className='justify-end'>
                                <Link href="#">more...</Link>
                            </CardFooter>
                        </Card>

                    ))}
                </div>
            </div>
        </div>
    )
}
