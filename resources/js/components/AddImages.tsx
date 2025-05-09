import { AddComponent } from './ui/AddComponent';
import { ImagesBoxHeader } from './ui/ImagesBoxHeader';

export const AddImages = () => {
    return (
        <>
            <div className="col-start-2 row-start-2 text-center">
                <ImagesBoxHeader></ImagesBoxHeader>
                <AddComponent></AddComponent>
            </div>
        </>
    );
};
