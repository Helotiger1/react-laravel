import { Link } from "@inertiajs/react";

export const UnsplashBoxButton = () => {
    return (
        <Link href="/page/unsplashbox" className="text-white m-0">
        <div className="bg-gray-1000 m-2 flex h-10 w-40 cursor-pointer items-center justify-center rounded hover:bg-gray-900">ImagesBox</div>
        </Link>
    );
};
