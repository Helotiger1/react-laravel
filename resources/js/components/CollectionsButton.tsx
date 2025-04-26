import { Link } from "@inertiajs/react"
export const CollectionsButton = () => {
    return (
        <div className="h-10 w-40 cursor-pointer rounded bg-gray-1000 hover:bg-gray-900 m-2 flex items-center justify-center">
          <Link href="/page/collections" className="text-white m-0">Collections</Link>
        </div>
  )
}
