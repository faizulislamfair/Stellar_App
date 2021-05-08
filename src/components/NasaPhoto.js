import React from 'react';
import { useEffect } from 'react';

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();
       
        async function fetchPhoto() {
            const res = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=B2xWu4dVY9rTfi8aDaPE3Jl9XLYjEbfdo3hGmrxP`
            );
            const data = await res.join();
            setPhotoData(data);
        }
    }, []);

    if (!photoData) return <div />;

    return(
        
    )
}