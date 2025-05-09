import { useState } from 'react';
import { SearchLabel } from './SearchLabel';

export const SearchBar = () => {
    const [query, setQuery] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setQuery(e.target.value);
    };

    const handleKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == "Enter"){
            e.preventDefault();
            alert("wao");
        }
    }

    return (
        <>
            <div className='border-white-500 rounded-md border max-h-[50px] p-2 max-w-[700px]'>
                <SearchLabel handleKeyDown={handleKeyDown} onChange={handleInputChange} ></SearchLabel>
            </div>
            
        </>
    );
};
