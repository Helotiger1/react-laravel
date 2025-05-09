import { CollectionsButton } from './ui/CollectionsButton';
import { HomeButton } from './ui/HomeButton';
import { UnsplashBoxButton } from './ui/UnsplashBoxButton';

export const Navbar = () => {
    return (
        <>
            <div className="bg-gray-1000 col-span-3 flex h-15 justify-between rounded border-b border-gray-600 shadow">
                <UnsplashBoxButton></UnsplashBoxButton>
                <div className="flex">
                    <HomeButton></HomeButton>
                    <CollectionsButton></CollectionsButton>
                </div>
            </div>
        </>
    );
};
