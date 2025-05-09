import React from 'react'
import { Link } from '@inertiajs/react'

export const HomeButton = () => {
  return (
    <Link href="/page/home" className="text-white m-0">
    <div className="h-10 w-40 cursor-pointer rounded bg-gray-1000 hover:bg-gray-900 m-2 flex items-center justify-center">Home</div>
    </Link>
  )
}
