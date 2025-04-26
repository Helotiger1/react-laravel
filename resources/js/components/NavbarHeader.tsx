import { UnsplashBoxButton } from './UnsplashBoxButton';
import { HomeButton } from './HomeButton';
import { CollectionsButton } from './CollectionsButton';

export const NavbarHeader = () => {
    return (
        <>
            <div className="bg-gray-1000 col-span-3 h-15 rounded border-b border-gray-600 shadow flex justify-between">
                <UnsplashBoxButton></UnsplashBoxButton>
                <div className='flex'>
                <HomeButton></HomeButton>
                <CollectionsButton></CollectionsButton>
                </div>
            </div>
        </>
    );
};
