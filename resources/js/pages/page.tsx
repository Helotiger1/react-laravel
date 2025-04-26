import { NavbarHeader } from '@/components/NavbarHeader';
import { SearchContainer } from '@/components/SearchContainer';
export default function page() {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 w-screen h-screen">
                <NavbarHeader></NavbarHeader>
                <SearchContainer></SearchContainer>
            </div>
        </>
    );
}
