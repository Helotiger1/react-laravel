
type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick : () => void;
};

export const SearchLabel = ({onChange, onClick} : Props) => {
    return (
        <>
            <div className="relative z-0">
                <input onChange={onChange}
                    type="text"
                    id="floating_standard"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:ring-0 focus:outline-none dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                />
                <label
                    htmlFor="floating_standard"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transhtmlForm text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                    Enter your keywords...
                </label>
            </div>
        </>
    );
};
