import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";


export const Layout = ({children} : {children: ReactNode}) => {
    return (
        <>
            <div className="grid grid-cols-3 grid-rows-6 w-screen h-screen">
                <Navbar></Navbar>
                {children}
            </div>
        </>
    );
}
