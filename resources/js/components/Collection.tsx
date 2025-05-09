interface CollectionProps {
    name: string;
    totalPhotos: number;
    photoURL: string;
}

export const Collection = ({ name, totalPhotos, photoURL }: CollectionProps) => {
    return (
        <div className="bg-white">
            <img src={photoURL}/>
            <h3>{name}</h3>
            <h4>{totalPhotos} photos</h4>
        </div>
    );
};
